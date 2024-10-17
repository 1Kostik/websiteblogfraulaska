import React, { useEffect, useState, useRef } from "react";
import { FormikProps } from "formik";
import { nanoid } from "nanoid";

import {
  inputWrapper,
  listStyle,
  selectContainer,
} from "./NewPostSelect.styled";

import { getNPCities, getWarehouses } from "@services/servicesApi";

import { IInitialCartFormValue } from "Interfaces/IInitialCartFormValue";

import { errorBorder, inputStyle } from "@components/CartForm/CartForm.styled";
import { inputLabel } from "@components/AdminForm/AdminForm.styled";

interface INewPostSelectProps {
  formik: FormikProps<IInitialCartFormValue>;
}

interface ICity {
  Present: string;
  DeliveryCity: string;
}

interface IWarehouse {
  Description: string;
}

const NewPostSelect: React.FC<INewPostSelectProps> = ({ formik }) => {
  const { setFieldValue, setFieldTouched, touched, errors, values } = formik;

  const [isShowSelectCities, setIsShowSelectCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState<null | ICity>(null);
  const [searchCity, setSearchCity] = useState("");
  const [cities, setCities] = useState<ICity[] | null>(null);
  const [highlightedCityIndex, setHighlightedCityIndex] = useState(0);

  const [isShowSelectWarehouse, setIsShowSelectWarehouse] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>("");
  const [searchWarehouse, setSearchWarehouse] = useState("");
  const [warehouses, setWarehouses] = useState<IWarehouse[] | null>(null);
  const [highlightedWarehouseIndex, setHighlightedWarehouseIndex] = useState(0);

  const cityListRef = useRef<HTMLDivElement>(null);
  const warehouseListRef = useRef<HTMLDivElement>(null);

  const handleSearchValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = e.target.value;
    type === "city"
      ? setSearchCity(value.trim())
      : setSearchWarehouse(value.trim());

    if (type === "city") setHighlightedCityIndex(0);
    else setHighlightedWarehouseIndex(0);
  };

  const onSelectCity = (value: ICity) => {
    setSelectedCity(value);
    setSearchCity("");
    setIsShowSelectCities(false);
    setCities(null);
    setHighlightedCityIndex(0);
  };

  const onSelectWarehouse = (value: string) => {
    setSelectedWarehouse(value);
    setSearchWarehouse("");
    setIsShowSelectWarehouse(false);
    setHighlightedWarehouseIndex(0);
  };

  useEffect(() => {
    const isCyrillicCityName = /^[а-яА-ЯёЁіІїЇ\s'’]+$/u.test(searchCity);
    if (searchCity.length > 1 && isCyrillicCityName) {
      (async () => {
        const cities = await getNPCities(searchCity);
        setCities(cities);
      })();
    }
    if (searchCity.length === 0) {
      setCities(null);
    }
  }, [searchCity]);

  useEffect(() => {
    const cityRef = selectedCity?.DeliveryCity;
    cityRef &&
      (async () => {
        const warehouses = await getWarehouses(cityRef);
        setWarehouses(warehouses);
      })();
    setSelectedWarehouse("");
  }, [selectedCity]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (!element.closest("[id=city]") && !element.closest("[id=warehouse]")) {
        setIsShowSelectCities(false);
        setCities(null);
        setSearchCity("");

        setIsShowSelectWarehouse(false);
        setSearchWarehouse("");
      } else if (element.closest("[id=city]")) {
        setIsShowSelectCities(true);
        setIsShowSelectWarehouse(false);
      }
      if (element.closest("[id=warehouse]")) {
        setIsShowSelectWarehouse(true);
        setIsShowSelectCities(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    setFieldValue("delivery_city", selectedCity?.Present || "");
    setFieldValue("delivery_destination", selectedWarehouse);
  }, [selectedWarehouse, selectedCity, setFieldValue]);

  const filteredWarehouses: IWarehouse[] =
    warehouses?.filter((warehouse: IWarehouse) =>
      warehouse.Description.includes(searchWarehouse)
    ) || [];

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: string
  ) => {
    if (type === "city") {
      if (e.key === "ArrowDown" && cities) {
        setHighlightedCityIndex((prev) =>
          prev < cities.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        setHighlightedCityIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (highlightedCityIndex >= 0 && cities) {
          onSelectCity(cities[highlightedCityIndex]);
        }
      }
    } else if (type === "warehouse") {
      if (e.key === "ArrowDown" && filteredWarehouses) {
        setHighlightedWarehouseIndex((prev) =>
          prev < filteredWarehouses.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        setHighlightedWarehouseIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (highlightedWarehouseIndex >= 0 && filteredWarehouses) {
          onSelectWarehouse(
            filteredWarehouses[highlightedWarehouseIndex].Description
          );
        }
      }
    }
  };

  useEffect(() => {
    if (cityListRef.current && highlightedCityIndex >= 0) {
      const highlightedElement = cityListRef.current.children[
        highlightedCityIndex
      ] as HTMLDivElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [highlightedCityIndex]);

  useEffect(() => {
    if (warehouseListRef.current && highlightedWarehouseIndex >= 0) {
      const highlightedElement = warehouseListRef.current.children[
        highlightedWarehouseIndex
      ] as HTMLDivElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [highlightedWarehouseIndex]);

  return (
    <>
      <div css={selectContainer}>
        <div css={inputWrapper}>
          <input
            type="text"
            name="city"
            id="city"
            placeholder={selectedCity ? "" : "Місто"}
            onChange={(e) => handleSearchValue(e, "city")}
            value={searchCity}
            autoComplete="none"
            onFocus={() => setFieldTouched("delivery_city", false, false)}
            onKeyDown={(e) => handleKeyDown(e, "city")}
            css={[
              inputStyle,
              errorBorder(!!(errors.delivery_city && touched.delivery_city)),
            ]}
          />
          <p css={inputLabel(!!searchCity || !!values.delivery_city)}>Місто</p>

          {!searchCity && <div>{selectedCity?.Present}</div>}
        </div>
        {isShowSelectCities && cities && cities.length > 0 && (
          <div css={listStyle} ref={cityListRef}>
            {cities.map((city, index) => (
              <p
                key={nanoid()}
                onClick={() => {
                  onSelectCity(city);
                }}
                style={{
                  backgroundColor:
                    highlightedCityIndex === index ? "#a6a4a450" : "none",
                }}
              >
                {city.Present}
              </p>
            ))}
          </div>
        )}
      </div>

      <div css={selectContainer}>
        <div css={inputWrapper}>
          <input
            type="text"
            name="warehouse"
            id="warehouse"
            placeholder={selectedWarehouse ? "" : "Відділення"}
            onChange={(e) => handleSearchValue(e, "warehouse")}
            value={searchWarehouse}
            autoComplete="none"
            onFocus={() =>
              setFieldTouched("delivery_destination", false, false)
            }
            onKeyDown={(e) => handleKeyDown(e, "warehouse")}
            css={[
              inputStyle,
              errorBorder(
                !!(errors.delivery_destination && touched.delivery_destination)
              ),
            ]}
          />
          <p
            css={inputLabel(!!searchWarehouse || !!values.delivery_destination)}
          >
            Відділення
          </p>

          {!searchWarehouse && <div>{selectedWarehouse}</div>}
        </div>
        {isShowSelectWarehouse && filteredWarehouses.length > 0 && (
          <div css={listStyle} ref={warehouseListRef}>
            {filteredWarehouses.map(({ Description }, index) => (
              <p
                key={nanoid()}
                onClick={() => onSelectWarehouse(Description)}
                style={{
                  backgroundColor:
                    highlightedWarehouseIndex === index ? "#a6a4a450" : "none",
                }}
              >
                {Description}
              </p>
            ))}
          </div>
        )}
        {isShowSelectWarehouse && filteredWarehouses.length === 0 && (
          <p>Немає відділень</p>
        )}
      </div>
    </>
  );
};

export default NewPostSelect;
