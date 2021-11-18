import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-green-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="font-serif text-3xl  font-extrabold text-gray-900 sm:text-4xl">
              About me
            </h1>

            <p className="text-xl leading-tight font-semibold tracking-tight text-green-600 sm:text-2xl">
              My name is Peyton Panik, and I’m based in Birmingham, AL.
            </p>
            <div className="mt-4 leading-loose">
              <p className="mb-8">
                I’m a former journalist and copy editor turned content marketer,
                and I love using my skills in writing, editing, design and
                coding to generate well-branded, engaging content journeys that
                not only hit OKRs, but also foster creativity and community.
              </p>
              <p className="mb-8">
                I’ve worked with brands like Shipt, Fleetio, and Parsley Health
                in a variety of capacities, from email marketing and PPC
                management to blog writing and content operations, but the core
                of my work always comes back to content strategy – finding
                better ways to tell better stories that meet customers where
                they are.
              </p>
              <p className="mb-8">
                When I’m not working, you can usually find me in the kitchen
                cooking with my partner Michael, or curled up with a book and my
                cat Izzie in the coziest second hand chair I got from a friend
                in college. I’m a swammer (read: former swimmer) and marching
                band has-been, and I still coach color guard at a local high
                school.
              </p>

              <p className="mb-8">
                Feel free to reach out with cool opportunities:
                <br />
                <a
                  href="mailto:peytonpanik@gmail.com"
                  className="border-b border-gray-500 hover:border-green-600 hover:text-green-600"
                >
                  peytonpanik@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Peyton Panik"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
