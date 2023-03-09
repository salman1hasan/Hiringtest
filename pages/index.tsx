/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next'
import BaseLayout from '@/components/layout/BaseLayout'
import { NftList } from '@/components'
import nfts from "../content/meta.json"
import { NftMeta } from '@/types/nft'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div />
        </div>
        <div className="relative">
          <div className="text-center">  
          </div>
          <NftList
          nfts={nfts as NftMeta[]}
          />
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home


//  return (
//     <>
//       <div className="flex-shrink-0">
//         <img
//           className={`h-full w-full object-cover`}
//           src={item.meta.image}
//           alt="New NFT"
//         />
//       </div>
   
//       <div className="flex-1 bg-white p-6 flex flex-col justify-between">
         
//       <div className="text-center">
//                 <img
//                   className="inline-block h-20 w-15"
//                   src="/images/aeiou.png"
//                   alt=""
//                 />
//               </div>
//               <br></br>
//       <p className="text-lg  font-semibold text-center text-gray-900">{item.meta.name}</p>
//         <div className="flex-1 mt-3">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center ">
              
//               <div>
//                 <img
//                   className="inline-block h-9 w-9 rounded-full"
//                   src="/images/aeiou.png"
//                   alt=""
//                 />
//               </div>
//               <div className="ml-2">
//                 <p className="text-xs font-medium text-gray-700 group-hover:text-amber-500">Creator</p>
//                 <p className="text-xs font-medium text-gray-500 group-hover:text-amber-500">{shortifyAddress(item.creator)}</p>
//               </div>
//             </div>
            
//             <p className="text-xs font-medium text-amber-500">
//               UNGUARDED NFT's
//             </p>
//           </div>
//           <div className="block mt-1">
          
//             <p className="mt-1 mb-3 text-xs text-gray-500">{item.meta.description}</p>
//           </div>
//         </div>
//         <div className="overflow-hidden mb-4">
//           <dl className="-mx-4 -mt-4 flex flex-wrap">
//             <div className="flex flex-col px-4 pt-4">
//               <dt className="order-2 text-xs  text-gray-500">Price</dt>
//               <dd className="order-1 text-lg font-extrabold">
//                 <div className="flex justify-center items-center text-amber-500">
//                   {item.price}
//                   <img className="h-6" src="/images/small-eth.webp" alt="ether icon"/>
//                 </div>
//               </dd>
//             </div>
//             { item.meta.attributes.map(attribute =>
//               <div key={attribute.trait_type} className="flex flex-col px-4 pt-4">
//                 <dt className="order-2 text-xs  text-gray-500">
//                   {attribute.trait_type}
//                 </dt>
//                 <dd className="order-1 text-lg  text-amber-500">
//                   {attribute.value}
//                 </dd>
//               </div>

