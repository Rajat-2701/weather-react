import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import MenuIcon from "@material-ui/icons/Menu";
import "../components/Navbar.css";
export default function WeatherNavbar() {
  const [sticky, setSticky] = useState(false);
  const [show, setShow] = useState(false);

  function setFixed() {
    if (window.scrollY >= 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);

    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <Navbar id="navbar-mob"
      className={`${
        show
          ? "h-auto transition-all ease duration-1000 z-50 overflow-hidden w-full"
          : "h-[70px] mt-0 transition-all ease duration-1000 overflow-hidden w-full lg:w-[100%] md:w-auto z-[10]"
      } ${
        sticky
          ? "fixed top-0 bg-white w-full z-10 shadow-[0_5px_30px_-5px_rgba(0,0,0,0.3)] transition-all ease-in-out duration-1000"
          : "bg-indigo-600  text-uppercase transition-all ease-in-out duration-1000s overflow-hidden"
      }`}
      expand="lg"
    >
      <Container>
        <NavbarBrand
          className={
            sticky
              ? "text-black text-3xl font-poppins fw-bold text-uppercase p-2"
              : "text-white text-3xl font-poppins fw-bold text-uppercase p-2"
          }
        >
          Weather App
        </NavbarBrand>
        <div
          className="hamburger lg:hidden md:flex bg-white sm:ml-[5rem] md:ml-[28.3rem] text-center w-[46px] h-[46px] xl:opacity-0 opacity-1 flex items-center justify-center text-xl p-[25px] rounded-full"
          onClick={() => setShow(!show)}
        >
          <i
            className={
              show
                ? "fas fa-times text-[28px] transition-all ease-in-out duration-1000"
                : "fas fa-bars text-[28px] transition-all ease-in-out duration-1000 flex items-center justify-center"
            }
          ></i>
        </div>
        <Nav
          className={`relative ml-auto mr-auto lg:flex  ${
            sticky ? "text-black" : "text-white"
          } ${
            show
              ? "translate-x-[0rem] mt-4 w-full lg:translate-x-[0rem] md:translate-x-0 transition-all ease-out duration-1000"
              : "translate-x-[500rem] xl:translate-x-0 lg:translate-x-[500rem] md:translate-x-[500rem] sm:translate-x-[500rem] transition-all ease-out duration-1000"
          } justify-content-between flex-wrap`}
        >
          <div
            className={`${
              show
                ? "flex flex-col lg:flex-row xl:flex"
                : "md:hidden lg:flex xl:flex"
            }`}
          >
            <Link
              to="/home"
              className={
                sticky
                  ? "p-[15px] hover:text-indigo-600 hover:font-bold font-medium"
                  : "p-[15px] hover:text-white font-medium"
              }
            >
              Home
            </Link>
            <Link
              to="/search"
              className={
                sticky
                  ? "p-[15px] hover:text-indigo-600 hover:font-bold font-medium"
                  : "p-[15px] hover:text-white font-medium"
              }
            >
              Search
            </Link>
            <Link
              to="/one"
              className={
                sticky
                  ? "p-[15px] hover:text-indigo-600 hover:font-bold font-medium"
                  : "p-[15px] hover:text-white font-medium"
              }
            >
              1 Day Forecast
            </Link>
            <Link
              to="/week"
              className={
                sticky
                  ? "p-[15px] hover:text-indigo-600 hover:font-bold font-medium"
                  : "p-[15px] hover:text-white font-medium"
              }
            >
              Weekly Forecast
            </Link>
            <Link
              to="/month"
              className={
                sticky
                  ? "p-[15px] hover:text-indigo-600 hover:font-bold font-medium"
                  : "p-[15px] hover:text-white font-medium"
              }
            >
              Monthly Forecast
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
