import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
const Jumbotron = () => {
  return (
    <section
      className=" w-full h-auto  py-52 bg-cover bg-center"
      style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1494322296366-b46227baa318?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
    >
      {" "}
      {/*py(padding atas bawah)*/}
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {" "}
          {/*membuat 2 grid colom */}
          {/*KOLOM1*/}
          <div className="flex items-center">
            {" "}
            {/*membuat ke tengah*/}
            <div className="space-y-8">
              {/*Y itu adalah atas bawah*/}

              <p className="motion-preset-confetti text-5xl font-semibold text-[#D6D6D6]">
                <span className="text-[#ffd900]">
                  Spade Gaming Space <br />
                </span>
                {""}
              </p>
              <p className="motion-preset-confetti text-[#ffffff] font-semibold">
                Hi, Spade Gaming Space <br />
                and I want to help you explore Indonesia Where do you want to go?
              </p>
              <Link href="https://www.instagram.com/rzkyagngngroho_">
                <Button className="bg-[black] mt-6 w-[100px] h-[60px]">Book Now</Button>
              </Link>
            </div>
          </div>
          {/*KOLOM2!*/}
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
