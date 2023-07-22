import Image from 'next/image'

function Gift() {
    return ( 
        <div>
            {/* <img src="gift.web" alt="" /> */}
            <Image
             src="/images/gift.webp"
             width={100}
             height={100}
             alt="Picture of the author"
             />
        </div>
     );
}

export default Gift ;