import React from 'react';
import photo from '../images/foto_.png';

const Hero = () => {
  return (
    <hero className='w-full flex flex-col sm:flex-row gap-4 justify-between'>

        <section className='w-full md:w-2/6 flex justify-center gap-6 bg-art bg-center-bottom border border-white rounded-[30px]
                            animate-fade-right animate-duration-[1200ms] animate-ease-in animate-normal animate-fill-forwards'>

            <img src={photo} alt="photo" className='w-[300px] md:w-[350px] object-cover grayscale grayscale-[100%]'/>

        </section>
        
        <main className='w-full md:w-4/6 flex flex-col md:flex-row justify-center items-center bg-gradient-black border border-white rounded-[30px]
                         animate-fade-left animate-duration-[1200ms] animate-ease-in animate-normal animate-fill-forwards animate-delay-[200ms]'>
            
            <section className='w-full md:w-5/6 py-2 md:px-10 md:py-6 flex flex-col justify-center text-center md:text-left md:border-r'>
                <h1 className='text-4xl md:text-6xl pt-6 font-futurespore'>
                    Gianmarco
                </h1>

                <h1 className='text-4xl md:text-6xl font-futurespore'>
                    Cossio
                </h1>

                <h3 className='md:w-full m-2 py-2 px-5 md:px-10 text-sm md:text-md lg:text-lg bg-[#9336B4] rounded-full'>
                    Desarrollador Web
                </h3>

                <h3 className='pt-1 sm:pt-2 text-xs md:text-sm lg:text-md border-t'>
                    Tecnico en Informatica
                </h3>
            </section>

            <section className='w-full md:w-1/6 p-4 md:p-10 flex flex-row md:flex-col gap-6 justify-center items-center border-t md:border-none'> 
                <svg className='w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M193.918 208.369c-4.729-10.456-6.849-22.652-3.236-33.731 3.612-11.327 11.703-20.413 19.794-28.878 22.525-22.531 50.285-39.085 72.316-61.986 12.197-12.573 22.278-27.634 25.762-44.937 2.864-12.695 1.496-25.764-1.117-38.337 11.7 13.319 15.559 32.363 12.197 49.541-3.608 19.292-14.316 36.344-26.886 51.031-10.081 11.827-21.659 22.282-33.731 31.993-14.065 11.327-27.88 23.524-36.716 39.457-7.472 12.943-9.215 28.876-4.11 42.942 8.341 24.146 27.756 42.071 38.338 64.848-11.703-10.332-23.152-21.036-33.86-32.361-11.198-11.95-21.78-24.644-28.751-39.582zm63.48-18.921c-2.115 19.792 8.213 38.462 20.539 53.151 5.972 6.596 11.076 14.687 11.323 23.899.251 12.318-6.716 23.774-15.684 31.861 2.119-.246 3.612-2.115 5.355-3.11 13.443-8.589 26.385-19.418 32.982-34.227 4.357-10.083 3.362-22.034-2.362-31.371-6.724-10.953-15.559-20.662-20.786-32.61-2.867-6.721-3.862-14.562-1.496-21.657 3.114-9.583 9.834-17.426 16.93-24.272 19.54-18.544 43.189-31.743 65.844-46.179-28.629 8.214-56.883 19.542-81.03 37.343-15.311 11.451-29.498 27.382-31.615 47.172zm136.049 93.604c13.568.748 26.882 10.704 29.374 24.397 2.366 11.825-3.358 23.524-10.705 32.485-12.075 14.438-28.382 24.771-44.807 33.609-1.622.991-2.99 2.237-4.235 3.608 21.659-5.478 43.314-13.689 60.867-27.756 9.705-8.091 18.294-18.799 20.163-31.619 1.743-11.076-2.86-22.528-11.077-29.871-9.96-9.09-24.021-12.448-37.218-10.704-7.593.995-15.931 2.613-21.158 8.961 6.226-1.241 12.32-3.733 18.796-3.11zM123.22 318.647c16.303 4.357 33.108 5.603 49.787 6.724 14.936.995 29.875 1.246 44.937 1.12 38.833-.619 77.916-3.236 116.003-11.699 3.608-.87 7.593-1.493 10.833-3.733 6.347-4.11 13.313-7.347 20.162-10.583-30.995 4.979-62.113 9.215-93.478 11.205-31.74 1.991-63.731 3.236-95.593 1.121-9.086-.87-18.423-1.371-26.886-4.858-1.994-.87-4.733-2.609-3.738-5.227 1.869-3.361 5.603-4.977 8.839-6.72 13.694-6.473 28.629-10.081 43.193-14.313-25.021-.376-49.916 5.971-72.814 15.806-5.105 2.491-10.83 4.481-14.936 8.714-1.622 1.739-1.622 4.732.247 6.222 3.735 3.361 8.711 4.854 13.444 6.221zm201.644 34.233c-21.784 3.859-43.694 7.472-65.726 8.589-24.147 1.618-48.294.247-72.191-2.241-4.604-.623-9.211-1.368-13.317-3.483-2.116-1.246-4.231-3.236-4.106-5.854.247-4.106 3.73-6.967 6.222-9.956-7.715 2.739-15.434 5.599-21.906 10.708-2.742 2.116-5.478 5.474-4.733 9.208 1.125 4.356 5.356 6.97 9.09 8.96 9.208 4.733 19.54 6.846 29.625 8.714 25.511 4.11 51.527 4.235 77.167 2.488 27.141-2.115 54.148-6.594 80.411-14.313-7.468-3.358-14.564-7.221-20.536-12.82zm-136.796 43.071c-6.97 1.99-14.066 4.357-19.79 8.957-2.868 2.241-5.105 6.104-3.734 9.713 1.743 4.604 6.1 7.347 10.203 9.705 10.708 5.854 22.78 8.589 34.604 10.708 26.765 4.229 54.27 3.608 80.908-1.12 15.806-2.989 31.615-7.221 46.301-13.815-9.584-3.984-18.917-8.467-27.878-13.693-15.559 2.738-31.246 5.603-47.178 6.598-21.032 1.618-42.319-.125-63.355-2.738-4.98-1.121-11.202-1.618-14.563-5.976-1.739-3.613 2.242-6.227 4.482-8.339zm170.277 80.031c17.424-3.604 34.977-7.719 50.908-15.806 4.976-2.867 11.076-5.979 12.698-11.95.87-5.725-5.105-8.714-9.337-11.08 2.613 2.993 4.356 7.347 1.74 10.83-4.357 5.853-11.821 8.091-18.42 10.332-20.66 5.85-42.072 8.216-63.355 10.582-56.385 5.102-113.146 6.348-169.528 1.618-18.92-1.994-38.217-4.109-56.264-10.829-2.86-1.246-7.217-2.492-7.217-6.352 1.117-3.354 4.357-5.227 7.217-6.845 12.945-6.595 27.384-10.207 41.822-11.077-4.228-2.491-9.208-2.738-14.062-2.613-12.076.373-23.9 3.483-35.349 7.347-9.834 3.604-19.916 7.59-27.76 14.811-3.111 2.735-5.971 7.962-2.739 11.699 4.98 5.353 12.699 6.72 19.54 8.338 38.338 6.599 77.171 10.328 116.011 11.699 51.531 1.498 103.434-.744 154.095-10.704zm51.033 6.724c-23.402 7.468-47.672 11.574-71.822 14.936-41.696 5.227-83.769 6.845-125.716 5.603-25.515-.995-51.03-2.738-76.176-6.974 5.85 3.984 13.071 5.227 19.794 7.096 28.257 5.976 57.255 7.096 86.01 7.966 42.19.748 84.387-.87 125.962-7.468 19.669-3.48 39.459-7.715 57.13-16.927 9.215-4.854 18.552-12.326 20.163-23.152-9.332 9.955-22.772 14.563-35.345 18.92z"></path></svg>

                <svg className='w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px]' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fillRule="evenodd" clipRule="evenodd" d="M1.008.5C.438.583.48 1.27.521 1.958v508.974c169.364 1.135 340.808.162 510.979.486V.5H1.008zm258.885 451.667c-11.822 11.919-30.478 18.938-53.429 18.938-37.643 0-58.543-18.34-71.884-43.711a967.712 967.712 0 0 1 39.344-23.795c5.456 15.262 23.886 32.42 44.683 21.857 13.183-6.699 11.661-27.01 11.661-49.054V236.53c-.042-.688-.083-1.375.482-1.458h47.116v117.529c0 42.598 3.044 78.387-17.973 99.566zm210.803-42.25c-2.674 39.884-35.243 61.063-79.17 61.188-43.062.124-70.624-19.013-87.433-48.567 12.085-8.317 25.778-15.017 38.375-22.822 10.08 15.761 27.537 30.91 53.429 28.652 16.131-1.406 34.856-14.555 24.285-34.482-5.127-9.66-17.516-14.567-28.656-19.425-35.352-15.424-76.828-29.571-72.861-84.992 1.327-18.514 9.852-31.525 20.889-40.796 11.311-9.5 26.46-15.867 46.629-16.511 36.629-1.173 56.723 15.12 70.429 37.884-11.664 8.891-24.514 16.608-37.401 24.281-4.229-12.995-24.644-25.658-41.772-17.969-7.789 3.493-14.788 13.761-10.684 26.224 3.66 11.115 18.589 17.199 30.599 22.344 36.352 15.56 76.977 30.767 73.342 84.991z"></path></svg>

                <svg className='w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#fff"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0ZM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052Z"></path><path d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24Zm3.206-1.85c-.579 0-1.046-.47-1.046-1.052 0-.581.467-1.051 1.046-1.051.578 0 1.046.47 1.046 1.051 0 .582-.468 1.052-1.046 1.052Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
            </section>

        </main>

    </hero>
  )
}

export default Hero