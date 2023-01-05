import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [Mobile, setMobile] = useState(false);
    const socialMedia = [
      {
        icon : require('../../public/assets/instagram.svg'),
        link : 'https://instagram.com'
      },
      {
        icon : require('../../public/assets/facebook.svg'),
        link : 'https://facebook.com'
      },
      {
        icon : require('../../public/assets/twitter.svg'),
        link : 'https://twitter.com'
      },
      {
        icon : require('../../public/assets/email.svg'),
        link : 'https://gmail.com'
      }
    ]
    const QuickLink = [
      {
        page : 'Home',
        link : '/'
      },
      {
        page : 'About Us',
        link : '/about'
      },
      {
        page : 'Menu',
        link : '/menu'
      },
      {
        page : 'Blog',
        link : '/blog'
      }  
    ]

    const linkMember = [
      {
        page : 'Register',
        link : '/'
      },
      {
        page : 'Login',
        link : '/about'
      },
      {
        page : 'Support',
        link : '/menu'
      }
    ]

    const Help = [
      {
        page : 'Privacy and Policy',
        link : '/'
      },
      {
        page : 'FAQ',
        link : '/about'
      }
    ]

    const Contact = {
      address : 'Jl. Raja isa no.10 Batam Kota, Kota Batam.',
      no_hp : '0896-0427-6162',
      email : 'tansusanto194@gmail.com'
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const mediaQuery = window.matchMedia("(max-width: 599px)");

            const handleMediaQuery = (event: MediaQueryListEvent) => {
                setMobile(event.matches);
              };
        
              mediaQuery.addListener(handleMediaQuery);
        
              return () => {
                mediaQuery.removeListener(handleMediaQuery);
              };
        }
    }, [])

  return (
    <div>
        {
            Mobile ? "" : 
            (<div className='mx-32 mb-8 grid grid-cols-2'> 
              {/* footer descktop */}
              <div className='space-y-3'>
                <h1 className='text-2xl font-vollkron font-semibold'>JXB Food<span className='text-orange'>.</span></h1>
                <p className='w-[50%] text-[.9rem] text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi assumenda amet et blanditiis autem. Amet laborum labore excepturi accusantium?</p>
                
                {/* social media */}
                <div className='flex space-x-8 items-center'>
                  {
                    socialMedia.map((val,idx) =>(
                      <Link key={idx} href={val.link}>
                        <Image src={val.icon} alt=""/>
                      </Link>
                    ))
                  }
                </div>
                </div>
                <div className='grid grid-cols-4 gap-5 -ml-24'>
                {/* Quicklink */}
                  <div className='space-y-4'>
                    <h4 className='font-semibold'>Quicklink</h4>
                    {
                      QuickLink.map((val,idx) => (
                        <li key={idx} className="list-none">
                          <Link href={val.link}>
                              {val.page}
                          </Link>
                        </li>
                      ))
                    }
                  </div>
                {/* Link Member */}
                  <div className='space-y-4'>
                    <h4 className='font-semibold'>Link Member</h4>
                    {
                      linkMember.map((val,idx) => (
                        <li key={idx} className="list-none">
                          <Link href={val.link}>
                              {val.page}
                          </Link>
                        </li>
                      ))
                    }
                  </div>
                {/* Help */}
                  <div className='space-y-4'>
                    <h4 className='font-semibold'>Help</h4>
                    {
                      Help.map((val,idx) => (
                        <li key={idx} className="list-none">
                          <Link href={val.link}>
                              {val.page}
                          </Link>
                        </li>
                      ))
                    }
                  </div>
                {/* Quicklink */}
                  <div className='space-y-4'>
                    <h4 className='font-semibold'>Contact Us</h4>
                    <div className='space-y-4'>
                      <p>{Contact.address}</p>
                      <p>{Contact.no_hp}</p>
                      <p>{Contact.email}</p>
                    </div>
                  </div>
                </div>
                <footer className='mt-12'>
                  <p>&copy; 2023, JXB Food | All Can Reseved</p>
                </footer>
            </div>)
        }
    </div>
  )
}

export default Footer
