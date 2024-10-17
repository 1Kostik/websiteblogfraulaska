import HeroSection from "@components/HeroSection/HeroSection";
import ProductCard from "@components/ProductCard/ProductCard";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Container,
  SearchContainer,
  Button,
  Section,
  MaineContainer,
  Wrapper,
  ProductListContainer,
  svgFilterSm,
  P,
} from "./StorePage.styled";
import StoreFilter from "@components/StoreFilter/StoreFilter";
import SearchStore from "@components/SearchStore/SearchStore";
import SortingItems from "@components/SortingItems/SortingItems";
import Pagination from "@components/Pagination/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import { containerStyles } from "@styles/variables";
import { ReactComponent as FilterSm } from "@assets/icons/filterDim.svg";
import { Product } from "Interfaces/Product";
import { getProductsAndSorted } from "@services/servicesApi";
import { getSavedFilter } from "@utils/getSavedFilter";

interface SavedFilter {
  id: string;
  productsId: string[];
}
function StorePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { sortOrder = "ASC", sortField = "price", page } = params;

  const [openFilter, setOpenFilter] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [typeOfSort, setTypeOfSort] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(Number(page || 1));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [searchItem, setSearchItem] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const savedFilteredItemsId = getSavedFilter().map((item: SavedFilter) => ({
    categoryId: item.id.toString(),
    productId: item.productsId.join(","),
  }));
  const [filteredItemsId, setFilteredItemsId] =
    useState<Record<string, string>[]>(savedFilteredItemsId);
  const [totalPage, setTotalPage] = useState<number>(0);

  const [isAdvertDeleted, setIsAdvertDeleted] = useState(false);

  const countItemPages = 12;
  const lastPage = totalPage && Math.ceil(totalPage / countItemPages);

  const options = [
    "Від найменшої ціни до найбільшої",
    "Від найбільшої ціни до найменшої",    
    "За популярністю",
  ];

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      switch (`sortOrder=${sortOrder}&sortField=${sortField}`) {
        case `sortOrder=ASC&sortField=price`:
          setTypeOfSort("Від найменшої ціни до найбільшої");
          break;
        case `sortOrder=DESC&sortField=price`:
          setTypeOfSort("Від найбільшої ціни до найменшої");
          break;      
        case `sortOrder=DESC&sortField=popularity`:
          setTypeOfSort("За популярністю");
          break;
        default:
          break;
      }
      isInitialMount.current = false;
    }
  }, [sortOrder, sortField]);

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

  useEffect(() => {
    switch (typeOfSort) {
      case "Від найменшої ціни до найбільшої":
        updateSearchParams({ sortOrder: "ASC", sortField: "price" });
        break;
      case "Від найбільшої ціни до найменшої":
        updateSearchParams({ sortOrder: "DESC", sortField: "price" });
        break;     
      case "За популярністю":
        updateSearchParams({ sortOrder: "DESC", sortField: "popularity" });
        break;
      default:
        break;
    }
  }, [typeOfSort, isAdvertDeleted, updateSearchParams]);

  useEffect(() => {
    const categoryIds = filteredItemsId.map((item) => item.categoryId);
    const productIds = filteredItemsId.flatMap((item) =>
      item.productId.split(",")
    );

    const newSearchParams = {
      ...params,
      sortOrder: sortOrder,
      sortField: sortField,
      categoryId: categoryIds,
      productId: productIds,
      page: currentPage.toString(),
      limit: countItemPages.toString(),
      search: searchItem.trim(),
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

    async function fetchProducts() {
      try {
        const result = await getProductsAndSorted(
          searchParamsString.toString()
        );        
        setTotalPage(Number(result.total_products));
        setProducts(result.productData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, [
    filteredItemsId,
    currentPage,
    searchItem,
    sortOrder,
    sortField,
    isAdvertDeleted,
    params,
    updateSearchParams,
  ]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (openFilter && windowWidth >= 360 && windowWidth < 768) {
      document.body.classList.add("no-scroll");
      document.querySelector("#topBtn")?.classList.add("btn-hide");
    } else {
      document.querySelector("#topBtn")?.classList.remove("btn-hide");
      document.body.classList.remove("no-scroll");
    }
  }, [openFilter, windowWidth]);

  const paginate = (page: number) => setCurrentPage(page);
  const firstPageBtn = () => setCurrentPage(1);
  const lastPageBtn = () => setCurrentPage(lastPage);
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

  const handleOpenFilter = () => {
    setOpenFilter((prev) => !prev);
  };
  const handleOnClickCard = (id: number) => {
    navigate(`product/${id}`);
  };

  return (
    <>
      <HeroSection viewType={"other"}>Магазин</HeroSection>
      <Section>
        <div css={containerStyles}>
          <MaineContainer>
            {openFilter && (
              <StoreFilter
                closeFilter={setOpenFilter}
                setFilteredItemsId={setFilteredItemsId}
              />
            )}
            <Container>
              <SearchContainer>
                <SearchStore
                  isOpenSearch={setOpenSearch}
                  setSearchItem={setSearchItem}
                  setOpenFilter={setOpenFilter}
                />
                <Wrapper>
                  <Button onClick={handleOpenFilter}>
                    <FilterSm css={svgFilterSm} />
                    <P>Фільтр</P>
                  </Button>
                  <SortingItems<string>
                    options={options}
                    width={"260px"}
                    isOpenSearch={openSearch}
                    isOpenFilter={openFilter}
                    setSelectedOption={setTypeOfSort}
                    selectedOption={typeOfSort}
                  />
                </Wrapper>
              </SearchContainer>

              <ProductListContainer>
                {products &&
                  products.map((item: Product) => (
                    <ProductCard
                      key={item.id}
                      show={openFilter}
                      handleOnClickCard={() => handleOnClickCard(item.id)}
                      item={item}
                      setIsAdvertDeleted={setIsAdvertDeleted}
                    />
                  ))}
              </ProductListContainer>
            </Container>
          </MaineContainer>
        </div>
        {products && products.length > 0 && (
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
      </Section>
    </>
  );
}

export default StorePage;
