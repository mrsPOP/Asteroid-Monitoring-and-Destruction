import React from "react";
import { AsteroidInfo } from "@/utils/types";
import { useFilterStore, useCartStore } from "@/hooks/useStore";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import stone from "../../../public/stone.svg";

const AsteroidItem = ({data} : {data: AsteroidInfo}) => {
  const inKilometers = useFilterStore((state) => state.inKilometers);
  const cart = useCartStore((state) => state.cart);

  function switchCartStateForAsteroid () {
    cart.has(data.id) ? cart.delete(data.id) : cart.add(data.id);
  }

  return (
    <li>
      <p>{data.date}</p>
      <div>
        <p>{inKilometers ? `${data.distanceInKilometers} км` : `${data.lunarDistance} лунные орбиты`}</p>
        <Image src={arrow} alt="Arrow" />
        <Image src={stone} alt="Stone picture"/>
        <p>&Oslash;{` ${data.maxDiameterInMeters} м`}</p>
      </div>
      <div>
        <button type="button" onClick={switchCartStateForAsteroid}>{
          cart.has(data.id) ? "В корзине" : "Заказать"
        }</button>
        {data.isHazardous ? <p>⚠️ Опасен</p>: ''}
      </div>
    </li>
  );
};

export default AsteroidItem;
