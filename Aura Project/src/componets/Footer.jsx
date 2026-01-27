import React from 'react'


const Footer = () => {
  return (
    <div className="bg-[#9F5656] h-56 mt-10 text-black flex items-center">
   
      <div className="w-full px-24 flex justify-center gap-x-150">

      
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p>(123) 456-7890</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p>123 Anywhere St., Any City, ST 12345</p>
          </div>
        </div>

      
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p>hello@reallygreatsite.com</p>
          </div>

         <div className="items-center gap-8">
          <h3 className="font-semibold text-lg">Social</h3>

         <div className="flex gap-3">
            <img
              className="size-6"
              src="https://img.icons8.com/?size=100&id=xQDoK3WxHJ8O&format=png&color=000000"
                      alt="Instagram"
            />
            <img
              className="size-6"
              src="https://img.icons8.com/?size=100&id=60014&format=png&color=000000"
              alt="Twitter"
            />
            <img
             className="size-6"
             src="https://img.icons8.com/?size=100&id=118466&format=png&color=000000"
                   alt="Facebook"
              />
           </div>
           </div>

        </div>

      </div>
    </div>
  )
}

export default Footer
