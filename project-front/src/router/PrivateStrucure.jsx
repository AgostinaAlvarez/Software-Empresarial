/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoLogOutOutline } from "react-icons/io5";
import AsideSection from '../components/AsideSection';
import PrivateRouter from './PrivateRouter';
import { AppContext } from '../context/AppContext';
import NavBar from '../components/NavBar';


const PrivateStructure = () => {
  const { getPagos,getCapital,getFacturasDeProveedores,getBalance,getBancos,getContacts,getProducts,getWarehouse,productos,getNumeracionesFacturas,getFacturas,getAjustesDeInventario,getVendedores,getRemitos,getCobranzas } = useContext(AppContext);
  useEffect(() => {
    getCobranzas();
    getBalance();
    getContacts();
    getProducts();
    getWarehouse();
    getNumeracionesFacturas();
    getFacturas()
    getAjustesDeInventario();
    getVendedores();
    getRemitos();
    getBancos();
    getFacturasDeProveedores();
    getCapital();
    getPagos();
  }, [])
  return (
    <>
      <NavBar/>
      <main className='main'>
        <AsideSection/>
        <div className='mainView'>
          <PrivateRouter/>
        </div>
      </main>
    </>
  )
}

export default PrivateStructure