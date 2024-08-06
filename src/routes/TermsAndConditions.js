import React from 'react'
import imgLogo from '../images/logo.png'

const TermsAndConditions = () => {
  return (
    <div className='w-full'>
      <div className='text-color-text py-5 px-0'>
        <div className='w-[%90] max-w-5xl my-0 mx-auto'>
          <p className='text-base font-bold m-0'>Terms and Conditions for NotifyPug</p>
        </div>
      </div>
      <div className='pt-5 border-t border-[#eee]'>
        <div className='w-[%90] max-w-5xl my-0 mx-auto'>
          <h1 className='text-4xl font-bold pb-2 text-center'>Terms and Conditions</h1>
          <p className='block text-xs pb-1'>Last updated: December 30, 2023</p>
          <h2 className='text-3xl font-bold pb-2 pt-6'>General conditions</h2>
          <p className='block text-base pb-1'>By using this application, you ratify your acceptance of the terms of use presented here and agree to respect them. If you download the application, your acceptance of the established terms will be required immediately prior to use as an end user of the application. If you do not accept these conditions of use, you are recommended to refrain from using the application.</p>
          <h2 className='text-3xl font-bold pb-2 pt-6'>Limitations on Liability</h2>
          <p className='block text-base pb-1'>We decline any responsibility for damages resulting from improper use of the system. We accept no liability for costs, inconvenience, loss or damage caused by interruptions or failures in the provision of services or facilities, or in access to our application, where such failures are the result of circumstances beyond our control. In the event that an event outside our control affects the performance of functions within the application, such obligations will be adjusted during the term and/or at the end of the duration of the event outside our control. In such case, we have no liability to you for the consequences of any failure to comply.</p>
          <h2 className='text-3xl font-bold pb-2 pt-6'>Modifications</h2>
          <p className='block text-base pb-1'>We reserve the right to review and adjust the terms and conditions of use at any time, making modifications as appropriate. Constantly check for possible changes, as they are mandatory for the use of this application.</p>
          <h2 className='text-3xl font-bold pb-2 pt-6'>Limitations of Use</h2>
          <p className='block text-base pb-1'>The use of the application is only authorized for legitimate purposes, and use is prohibited in case of:</p>
          <ul className='block list-disc'>
            <li className='list-item ml-4'>
              <p className='block text-base pb-1'><b>Against the law</b>: You are not permitted to use the application in any way that violates any applicable local, national or international law or regulation, as well as the terms of any agreement between you and the application.</p>
            </li>
            <li className='list-item ml-4'>
              <p className='block text-base pb-1'><b>Illegal or fraudulent activities</b>: Use of the application for illegal or fraudulent purposes or purposes is not permitted.</p>
            </li>
            <li className='list-item ml-4'>
              <p className='block text-base pb-1'><b>Harming minors</b>: It is strictly prohibited to use the application with the intention of harming or attempting to harm minors in any way.</p>
            </li>
          </ul>
          <p className='block text-base pb-1'>Any unauthorized use of the App for purposes inconsistent with these Terms will be subject to appropriate action and may result in termination of use of the App.</p>
          <img className='mx-auto' src={imgLogo} alt="Logo NotifyPug" />
        </div>
      </div>
    </div>
  )
};

export default TermsAndConditions;