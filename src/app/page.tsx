import Image from 'next/image'
import Home from './home'
import Major from './major'
import Header from './header'
export default function App() {
  return (
    <main>
      <Header />
      <Home />
      <Major />
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">You might be wondering...</h2>
  </div>

  <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

        <div>
          <h3 className="md:text-lg font-semibold text- gray-800 dark:text-gray-200">
            Can I cancel at anytime?
          </h3>
          <p className="mt-1 text-gray-500">
            Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
          </p>
        </div>
      </div>
    </div>

    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

        <div>
          <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
            My team has credits. How do we use them?
          </h3>
          <p className="mt-1 text-gray-500">
            Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
          </p>
        </div>
      </div>
    </div>

    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

        <div>
          <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
            How does Preline's pricing work?
          </h3>
          <p className="mt-1 text-gray-500">
            Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
          </p>
        </div>
      </div>
    </div>

    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

        <div>
          <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
            How secure is Preline?
          </h3>
          <p className="mt-1 text-gray-500">
            Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
          </p>
        </div>
      </div>
    </div>

    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

        <div>
          <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
            How do I get access to a theme I purchased?
          </h3>
          <p className="mt-1 text-gray-500">
            If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
          </p>
        </div>
      </div>
    </div>

    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

        <div>
          <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Upgrade License Type
          </h3>
          <p className="mt-1 text-gray-500">
            There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}
