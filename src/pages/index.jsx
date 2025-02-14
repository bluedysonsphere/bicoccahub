import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Badge, Row, Col } from "react-bootstrap"
import RepositoryExplorer from "../components/repositoryexplorer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Disclaimer = () => (
  <>
    <div className="mt-5 text-center">
      <FontAwesomeIcon
        icon="exclamation-triangle"
        className="fai text-danger"
      />
      <br />
      <h2 className="text-danger">Attenzione</h2>
      <p>
        Tutti gli appunti potrebbero contenere errori: nell'eventualità, siete
        pregati di notificarlo ai rispettivi autori.
        <br />
        Il materiale qui contenuto non intende sostituirsi alle lezioni dei
        professori né ai testi consigliati da questi ultimi.
      </p>
    </div>
    <div className="mt-4 text-center">
      <h4>
        <Badge pill variant="warning">
          !
        </Badge>{" "}
        Appunti in corso d'opera
      </h4>
      <p>
        Gli appunti con questa indicazione sono ancora incompleti. Contribuisci
        alla loro stesura!
      </p>
    </div>
  </>
)
function IndexPage({ data }) {
  return (
    <Layout hero>
      <SEO />
      <main>
        <Container>
          <section id="welcome" className="text-center">
            {/* <h1 className="title">Benvenuto</h1> */}
            <h2 className="title">
              {data.description.siteMetadata.description}
            </h2>
          </section>
          <hr />
          <section id="downloads">
            <div className="mb-5 text-center">
              {/* <h3 className="title">
                <small class="text-muted">
                  Audentes fortuna iuvat, la fortuna aiuta gli audaci.
                </small>
              </h3> */}
            </div>
            <RepositoryExplorer />
          </section>
          <section id="disclaimer" className="my-5 text-center">
            <Disclaimer />
          </section>
          <section className="mt-5 pt-5 contacts">
            <Row>
              <Col className="text-center">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={data.description.siteMetadata.repoUrl}
                >
                  <FontAwesomeIcon icon="code-branch" className="fai" />
                  <br />
                  <h5>Contribuisci</h5>
                </a>
                <p>
                  Inviaci una pull request o contattaci.
                  <br />
                  <a href="/contribuisci">Scopri come.</a>
                </p>
              </Col>
              {/* <Col className="text-center">
                <a href="/">
                  <FontAwesomeIcon icon="newspaper" className="fai" />
                  <br />
                  <h5>Notizie</h5>
                </a>
                <p>Prossimamente in arrivo!</p>
              </Col> */}
              <Col className="text-center">
                <a href="/staff">
                  <FontAwesomeIcon icon="user-friends" className="fai" />
                  <br />
                  <h5>Lo staff</h5>
                </a>
                <p>Conosci le fantastiche persone dietro al progetto</p>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    description: site {
      siteMetadata {
        description
        repoUrl
      }
    }
    subjects: allSubjectsYaml {
      nodes {
        year
        subjects {
          name
          repositories {
            owner
            url
            wip
          }
        }
      }
    }
  }
`

export default IndexPage
