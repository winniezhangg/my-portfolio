import Link from "next/link";

export default function AngelsAmongUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-8 sm:px-16 lg:px-32 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200 mb-8"
            >
              <svg
                className="w-4 h-4 mr-2 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              Back to Projects
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Angels Among Us
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Streamlining the foster dog application process for volunteers by creating a foster matching application
          </p>
          
          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <h3 className="font-semibold text-gray-800 mb-2">My Role</h3>
              <p className="text-gray-600">Product Designer</p>
              <h3 className="font-semibold text-gray-800 mb-2">Timeline</h3>
              <p className="text-gray-600">August 2023 - November 2023</p>
              <h3 className="font-semibold text-gray-800 mb-2">Team</h3>
              <p className="text-gray-600">2 Product Managers, 1 Engineering Manager, 6 Developers</p>
              <h3 className="font-semibold text-gray-800 mb-2">Tools</h3>
              <p className="text-gray-600">Figma</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <h3 className="font-semibold text-gray-800 mb-2">Timeline</h3>
              <p className="text-gray-600">August 2023 - November 2023</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <h3 className="font-semibold text-gray-800 mb-2">Team</h3>
              <p className="text-gray-600">2 Product Managers, 1 Engineering Manager, 6 Developers</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <h3 className="font-semibold text-gray-800 mb-2">Tools</h3>
              <p className="text-gray-600">Figma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-8 sm:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Overview</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              Angels Among Us Pet Rescue is a nonprofit based in Georgia whose mission is to "Rescue One Until There Are None." 
              Dog by dog, and cat by cat, Angels Among Us Pet Rescue strives to live this philosophy every day by saving as many 
              animals as they can and seeing each animal through every step of the process from the actual rescue freedom ride 
              to the loving foster home and ultimately to the "forever" home they were meant to have.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-8 sm:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Partnership</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              Angels Among Us has partnered with Bits of Good to develop an application that would focus on improving 
              volunteer-foster matching with their volunteers. This is AAU's second semester with Bits of Good. 
              I joined the team as a product designer in August 2023.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Problems with the past system</h3>
            <p className="mb-4">
              AAU foster matching is currently done using a Facebook group with ~800 users with up to 40 posts and ~25 dogs saved weekly. 
              This brings up the following problems:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No chronological ordering of the pet posts</li>
              <li>Any user can post on the feed</li>
              <li>No formal application, just Facebook and email</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ideation Process Section */}
      <section className="py-16 px-8 sm:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Ideation Process</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              Last semester, our team met with AAU multiple times to understand our client's goals and requirements. 
              From what the team gathered, they began ideating a foster-matching web app that allows admin from Angels Among Us 
              to create posts for dogs that need foster homes. It will further allow AAU volunteers to submit applications 
              through this web app to foster the dog. Admin can then check whether the volunteer's foster preferences match 
              the properties of the foster dog.
            </p>
          </div>
        </div>
      </section>

      {/* Previous Work and Goals Section */}
      <section className="py-16 px-8 sm:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Previous Work and This Semester's Goals</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              I started as a product designer on this team during its second semester partnering with Bits of Good. 
              Hence, the majority of the user research and findings have been gathered by the previous designers on the team. 
              I used their research and findings to continue providing flows and designs for the ongoing application.
            </p>
            <p className="mb-6">
              At the start of the semester, our leadership team held a meeting to establish our goals for this semester. 
              We wanted to build off of features that were completed last semester and continue designing based on our client's needs. 
              We held <strong>Client Meeting #1</strong> to determine what iterations needed to be made to previous designs, 
              as well as determine potential new features they wanted to see.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 sm:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Features Completed</h2>
          
          {/* Resources Page */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Resources Page</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <p className="text-gray-600 leading-relaxed">
                Volunteers were previously searching a long Google Doc with a list of emails and phone numbers. 
                The resources page on the foster application is a static page with a list of all emails and phone numbers 
                that volunteers can reach easily from the foster matching website.
              </p>
            </div>
          </div>

          {/* Foster Offer Flow */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Foster Offer Flow</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <p className="text-gray-600 leading-relaxed mb-4">
                The goal was to design an intuitive flow where users can find the dog they want to foster on the feed 
                and directly apply to foster for that dog from there. Selecting a dog off of the foster feed will open up 
                a modal that shows more details about the dog. At this point in the flow, volunteers can decide if this dog 
                is the right fit for them and submit an application if so. Upon applying, an email should automatically be 
                sent to the nonprofit that a volunteer is offering to foster the dog. AAU's admin team can then easily analyze 
                the volunteer's details in the email.
              </p>
            </div>
          </div>

          {/* Covering a Post */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Covering a Post</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <p className="text-gray-600 leading-relaxed mb-4">
                AAU expressed that in many cases, a dog gets temporarily fostered, and their team would have to remake 
                the entire post again when they enter the foster system. They wanted a way where they could "archive" 
                or "cover" a post during the duration of the temporary foster period and "uncover" them when needed. 
                Therefore, we implemented the functionality that allows admins to cover a post and hide it from volunteers 
                on the feed. Covered posts can only be seen by AAU's admin and the admin team could also filter by covered 
                posts to see all covered posts at once.
              </p>
            </div>
          </div>

          {/* Volunteer Search */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteer Search</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
              <p className="text-gray-600 leading-relaxed mb-4">
                We learned that many times, a dog has certain unique features that make them hard to foster for the normal volunteer. 
                For example, not many volunteers prefer to foster a pregnant dog. Therefore, often, these dogs stay on the feed 
                for an extended period. To address this issue, AAU's admin team wanted a way to "reverse" the search process 
                and filter for volunteers with those specific preferences and contact them directly. Hence, we implemented 
                an additional functionality on the admin's application that allows them to input a dog's details and find matches 
                of a volunteer with those preferences. We aim for this feature to further streamline the fostering process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 px-8 sm:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Design Process</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Iterate, iterate, iterate...</h3>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                After completing our goals on the requirements list, we took time to make iterations to all of the designs 
                to perfect them. We make numerous iterations that makes the UI easy to understand and use. We improved 
                the overall aesthetic of the application, ensuring that it matches the visual branding of the nonprofit 
                as this client-facing application will be used by their large network of volunteers.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Preparing for Deployment</h3>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                As we are nearing the end of the semester, we are preparing to deploy the application. However, before we deploy, 
                we have to ensure that all of our design iterations are final, all edge cases have been considered, 
                and all bugs have been fixed. For the last sprint, we took time to thoroughly test the application 
                for any errors in the functionality and design. We worked heavily with the development team during this process 
                to align product, design and engineering requirements.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Design Discrepancies</h3>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                Before deploying, we also had to be certain that there were no discrepancies between the Figma and the application, 
                as well as on the different pages of the application as well. One major discrepancy we had to thoroughly check 
                was what dog traits would be included in what part of the application. During <strong>Client Meeting #2</strong>, 
                we determined that AAU wants certain traits to be only displayed on certain parts of the websites. 
                Currently, dog traits are displayed on onboarding for user preferences, on the dog post itself, and the feed filter. 
                The client has expressed that these traits should not be on the feed filter or dog post, but can be in onboarding. 
                Hence, we made sure that our application aligned with exactly what the client needed.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">User Guides for Transitioning</h3>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                As we are nearing the end of the semester, we held <strong>Client Meeting #3</strong> to discuss transitioning 
                from the previous system to the new application. AAU wanted some form of user guides/manuals to assist 
                their admin team and volunteers learn how to use the new application. Therefore, we created three separate 
                guides for volunteers, admins, and content creators to concisely describe the main features of the application 
                and how to use each of them. We aimed to make the hand off from our team to theirs as smooth and seamless as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-16 px-8 sm:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Reflection</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              This is the largest project that I have worked on so far. I gained incredibly valuable experience working 
              on such a large team as well. Collaborating with my product and engineering managers taught me a lot about 
              aligning design needs with product and engineering. Being part of the leadership team, I was able to really 
              see what happens behind the scenes with a client. I was able to take a lead on the design process during 
              design meetings with our client and I thoroughly enjoyed having the opportunity to make an impact on their 
              nonprofit with my designs!
            </p>
            <p className="mb-6">
              Overall, I had an amazing time with the Angels Among Us team at Bits of Good and I am so excited that 
              this application got to be deployed this semester!
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-8 sm:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
} 