import { containerStyles } from "@styles/variables";
import { useCallback, useEffect, useMemo, useState } from "react";
import { deleteOrder, getOrders } from "@services/servicesApi";
import { IOrder } from "Interfaces/IOrder";
import {
  tableStyles,
  tbodyStyles,
  theadStyles,
  thHeadsStyles,
  trHeadsStyles,
} from "./OrdersPage.styled";
import OrderItem from "@components/OrderItem/OrderItem";
import { nanoid } from "nanoid";
import SortingItems from "@components/SortingItems/SortingItems";
import { useSearchParams } from "react-router-dom";
import Pagination from "@components/Pagination/Pagination";
import { useCheckTokenExpiration } from "@hooks/useCheckTokenExpiration";

const OrdersPage = () => {
  const checkExpiration = useCheckTokenExpiration();
  const [data, setData] = useState<IOrder[]>([]);
  const [typeOfSort, setTypeOfSort] = useState<string | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const [totalPage, setTotalPage] = useState<number>(0);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { sortOrder = "DESC", page } = params;

  const [currentPage, setCurrentPage] = useState(Number(page || 1));
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpsateStatusOrder, setIsUpsateStatusOrder] = useState(false);
  const countItemPages = 20;
  const lastPage = totalPage && Math.ceil(totalPage / countItemPages);

  const updateSearchParams = useCallback(
    (newParams: Record<string, string | string[]>) => {
      setSearchParams((prevParams) => {
        const updatedParams = new URLSearchParams(prevParams);
        Object.keys(newParams).forEach((key) => updatedParams.delete(key));
        Object.entries(newParams).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((val) => updatedParams.append(key, val));
          } else if (value !== "") {
            updatedParams.set(key, value);
          }
        });
        return updatedParams;
      });
    },
    [setSearchParams]
  );

  const handleDeleteOrder = async (id: number) => {
    try {
      await deleteOrder(id);
      setIsDeleted((prev) => !prev);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    let sortOrder = "ASC";

    switch (typeOfSort) {
      case "Дата: від новіших до старіших":
        sortOrder = "DESC";
        break;
      case "Дата: від старіших до новіших":
        sortOrder = "ASC";
        break;
      default:
        sortOrder = "ASC";
        break;
    }
    updateSearchParams({ sortOrder, page: currentPage.toString() });
  }, [typeOfSort, currentPage, updateSearchParams]);

  useEffect(() => {
    checkExpiration();
    const newSearchParams = {
      ...params,
      sortOrder: sortOrder,
      page: currentPage.toString(),
    };

    const nonEmptyParams = Object.entries(newSearchParams).reduce(
      (acc, [key, value]) => {
        if (Array.isArray(value)) {
          const filteredValue = value.filter((v) => v !== "");
          acc[key] = filteredValue;
        } else if (value !== undefined && value !== "") {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, string | string[]>
    );

    updateSearchParams(nonEmptyParams);

    const searchParamsString = new URLSearchParams();

    Object.entries(nonEmptyParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          if (val !== "") {
            searchParamsString.append(key, val);
          }
        });
      } else if (value !== "") {
        searchParamsString.append(key, value);
      }
    });

    async function fetchOrders() {
      try {
        const result = await getOrders(searchParamsString.toString());
        setTotalPage(Number(result.totalOrders));
        setData(result.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchOrders();
  }, [
    currentPage,
    sortOrder,
    params,
    updateSearchParams,
    isDeleted,
    isUpsateStatusOrder,
  ]);

  const options = [
    "Дата: від новіших до старіших",
    "Дата: від старіших до новіших",
  ];

  const firstPageBtn = () => setCurrentPage(1);
  const lastPageBtn = () => setCurrentPage(lastPage);
  const paginate = (page: number) => setCurrentPage(page);
  const nextPage = () =>
    setCurrentPage((prev) => {
      if (prev === lastPage) {
        return prev;
      }
      return prev + 1;
    });
  const prevPage = () =>
    setCurrentPage((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });

  return (
    <section style={{ width: "100vw", paddingTop: "100px" }}>
      <div css={containerStyles}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ color: "white", fontSize: "25px" }}>Всі замовлення</h1>

          <div style={{ width: "265px" }}>
            <SortingItems<string>
              options={options}
              width={"285px"}
              setSelectedOption={setTypeOfSort}
              selectedOption={typeOfSort}
            />
          </div>
        </div>

        <table css={tableStyles}>
          <thead css={theadStyles}>
            <tr css={trHeadsStyles}>
              <th css={thHeadsStyles}>Номер</th>
              <th css={thHeadsStyles}>Дата</th>
              <th css={thHeadsStyles}>Ім'я</th>
              <th css={thHeadsStyles}>Телефон</th>
              <th css={thHeadsStyles}>Сумма</th>
              <th css={thHeadsStyles}>Тип оплати</th>
              <th css={thHeadsStyles}>Оплата</th>
              <th css={thHeadsStyles}>Статус</th>
              <th css={thHeadsStyles}>Видалити</th>
              <th css={thHeadsStyles}>Детальніше</th>
            </tr>
          </thead>
          <tbody css={tbodyStyles}>
            {data &&
              data.map((item) => (
                <OrderItem
                  item={item}
                  key={nanoid()}
                  onDelete={handleDeleteOrder}
                  setIsUpsateStatusOrder={setIsUpsateStatusOrder}
                />
              ))}
          </tbody>
        </table>
      </div>
      {totalPage > 10 && (
        <Pagination
          totalPage={totalPage}
          countItemPages={countItemPages}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          firstPageBtn={firstPageBtn}
          lastPageBtn={lastPageBtn}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      )}
    </section>
  );
};

export default OrdersPage;
