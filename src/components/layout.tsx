import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../css/bootstrap.min.css"

export default function Layout({ children }) {
  //useStaticQuery is executed at build time
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allGraphCmsModel {
        nodes {
          name
          urlSlug
        }
      }
    }
  `)

  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              Trailers
            </Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              {data.allGraphCmsModel.nodes.map(trailerModel => {
                return (
                  <li>
                    <Link to={`/trailers/${trailerModel.urlSlug}`}>
                      {trailerModel.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "60px" }}>
        <main>{children}</main>
      </div>
    </>
  )
}
