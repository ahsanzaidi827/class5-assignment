import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    

    
  //  3 cards in 1 div
   <section>

    <div className="bg-rose-100 text-center font-bold">
      <h1 >Class 5 Assignment</h1>
      <p>This is a simple page with three cards with equal width  and two cards with equal width in a row.</p>
    </div>

    <div className="flex justify-center gap-5 mt-10">


<div className="bg-red-300  w-52 h-64" >  </div>
<div className="bg-red-500  w-52 h-64">  </div>
<div className="bg-red-600  w-52 h-64">  </div> 
</div> <br />



{/* 2 cards in one div */}
<div className="flex justify-center gap-5 mt-15">


<div className="bg-red-700  w-80 h-64" >  </div>
<div className="bg-red-900  w-80 h-64">  </div>



    </div>
   </section>

    
  );
}
