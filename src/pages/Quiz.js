import React from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Helmet } from "react-helmet";

function Quiz() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden px-2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cerdas Cermat Swift</title>
        <meta
          name="description"
          content="Cerdas Cermat Menyambut Kemerdekaan RI"
        />
        <link rel="canonical" href="https://swiftid.dev/#/cerdas-cermat" />
        <meta property="og:title" content="Cerdas Cermat Swift" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swiftid.dev/#/cerdas-cermat" />
        <meta
          property="og:image"
          content={require("../images/facebook-quiz.jpg")}
        />
      </Helmet>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <h1
          className="text-white mt-20 text-center"
          style={{
            fontSize: 80,
            fontFamily: "'Bangers', cursive",
            textShadow: "0 5px 9px rgba(29,29,29,0.86)",
          }}
        >
          Cerdas Cermat Swift
        </h1>
        <div
          className=" text-white text-center p-4 w-full max-w-sm mx-auto rounded-md"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p>
            Uji pengetahuan iOS development kamu di lomba Cerdas Cermat Swift!
          </p>
          <br />
          <p>
            <strong>Waktu</strong>
            <br /> 16:00 WIB
          </p>
          <br />
          <p>
            <strong>Tanggal</strong>
            <br />
            Ronde #1: Sabtu, 24 Juli 2021
            <br />
            Ronde #2: Sabtu, 31 Juli 2021
            <br />
            Ronde #3: Sabtu, 7 Agustus 2021
            <br />
            Ronde Final: Sabtu, 14 Agustus 2021
          </p>
          <br />
          <p>
            <strong>Persyaratan</strong>
            <span className="block text-left">
              <span role="img" aria-label="checkmark">
                ✅
              </span>{" "}
              Gabung di{" "}
              <a
                className=" font-bold underline"
                href="https://forms.gle/enxjuetHcjyN8msN9"
              >
                Swift Study Group Indonesia
              </a>
              . (Kalau belum)
              <br />
              <span role="img" aria-label="checkmark">
                ✅
              </span>{" "}
              Daftarkan tim kamu di{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className=" font-bold underline"
                href="https://forms.gle/W38F42HADkse6hFEA"
              >
                sini
              </a>
              . (Wajib 2 orang per tim)
            </span>
          </p>
          <br />
          <p>
            <strong>Format</strong>
            <span className="block text-left">
              <span role="img" aria-label="checkmark">
                ✅
              </span>{" "}
              Tiga ronde pertama quiz cepet2an <br />
              <span role="img" aria-label="checkmark">
                ✅
              </span>{" "}
              4 tim dengan score tertinggi masuk ronde final.
            </span>
          </p>
          <br />
          <p>
            <strong>Hadiah</strong>
            <span className="block text-left">
              🏷 Apple AirTag untuk tim juara!
              <br />
              👕 Special T-shirt untuk 4 tim di Final
              <br />
              👕 Special T-shirt untuk 1 tim dipilih acak
            </span>
          </p>
          <br />
          <p>
            <strong>Host</strong>
            <br />
            <span className=" flex flex-row justify-center">
              <img
                alt="Azis"
                className=" w-20"
                src={require("../images/azis.png")}
              />
            </span>
            <a
              className="font-bold underline"
              href="https://www.linkedin.com/in/azisseno/"
            >
              Azis Senoaji Prasetyotomo
            </a>
            <br />
            <br />
            <span className=" flex flex-row justify-center">
              <img
                alt="Nico"
                className=" w-20"
                src={require("../images/nico.png")}
              />
            </span>
            <a className="font-bold underline" href="https://twitter.com/2co_p">
              Nico Prananta
            </a>
          </p>
          <br />
          <div className="mb-4 mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white text-center p-4 rounded-md font-bold w-full"
              href="https://forms.gle/W38F42HADkse6hFEA"
            >
              Daftar sekarang
            </a>
          </div>
        </div>
        <img
          style={{ zIndex: -100 }}
          src={require("../images/quiz-bg.jpg")}
          alt=""
          className="fixed top-0 right-0 left-0 bottom-0 h-screen w-full object-cover"
        />
      </main>
      <br />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Quiz;
