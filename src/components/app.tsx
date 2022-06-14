import React from "react";

import { simplePie, simpleDoughnut } from "simple-pie";
// import {simplePie, simpleDoughnut} from "../packages/simple-pie/src/simple-pie"; // Don't commit this line uncommented. This is for Development purposes. Checkout README, please

import { SimplePie, SimpleDoughnut } from "react-simple-pie";
// import { SimplePie, SimpleDoughnut } from "../packages/react-simple-pie/src"; // Don't commit this line uncommented. This is for Development purposes. Checkout README, please

import "./app.css";

export function App(): JSX.Element {
  return (
    <main className="app">
      <article>
        <h2 className="title">
          React Simple Pie
          <br />
          ⚛️ 🥧 🍩
        </h2>
        <hr />

        <div className="grid">
          <section className="example-item">
            <div className="pie">
              <SimplePie values={[1, 2, 1, 2]} />
            </div>
            <pre>
              <code>{"<SimplePie values={[1, 2, 1, 2]} />"}</code>
            </pre>
          </section>

          <section className="example-item">
            <div className="pie">
              <SimplePie values={[1, 1, 1]} borderWidth={4} />
            </div>
            <pre>
              <code>{"<SimplePie values={[1, 1, 1]} borderWidth={4} />"}</code>
            </pre>
          </section>

          <section className="example-item">
            <div className="pie">
              <SimpleDoughnut values={[1, 2, 1, 2]} />
            </div>
            <pre>
              <code>{"<SimpleDoughnut values={[1, 2, 1, 2]} />"}</code>
            </pre>
          </section>

          <section className="example-item">
            <div className="pie">
              <SimpleDoughnut
                values={[1, 1, 1]}
                borderWidth={4}
                borderColor="green"
                innerRadius={0.3}
              />
            </div>
            <pre>
              <code>
                {
                  '<SimpleDoughnut\n  values={[1, 1, 1]}\n  borderWidth={4}\n  borderColor="green"\n  innerRadius={0.3}\n/>'
                }
              </code>
            </pre>
          </section>
        </div>
      </article>

      <article>
        <h2 className="title">
          Simple Pie
          <br />
          🥧 🍩
        </h2>
        <hr />

        <div className="grid">
          <section className="example-item">
            <div
              className="pie"
              ref={(pie) => pie?.appendChild(simplePie([2, 1, 1, 2]))}
            />
            <pre>
              <code>{"simplePie([2, 1, 1, 2])"}</code>
            </pre>
          </section>

          <section className="example-item">
            <div
              className="pie"
              ref={(pie) =>
                pie?.appendChild(
                  simplePie([2, 1, 1, 2], {
                    borderColor: "transparent",
                  })
                )
              }
            />
            <pre>
              <code>
                {
                  'simplePie([2, 1, 1, 2], {\n  borderColor: "transparent",\n"})'
                }
              </code>
            </pre>
          </section>

          <section className="example-item">
            <div
              className="pie"
              ref={(pie) =>
                pie?.appendChild(
                  simpleDoughnut([2, 1, 1, 2], {
                    borderWidth: 3,
                  })
                )
              }
            />{" "}
            <pre>
              <code>
                {'simpleDoughnut([2, 1, 1, 2], {\n  borderWidth: 3,\n"})'}
              </code>
            </pre>
          </section>

          <section className="example-item">
            <div
              className="pie"
              ref={(pie) =>
                pie?.appendChild(
                  simpleDoughnut([2, 1, 1, 2], {
                    borderColor: "transparent",
                    inner: 0.5,
                  })
                )
              }
            />
            <pre>
              <code>
                {
                  'simplePie([2, 1, 1, 2], {\n  borderColor: "transparent",\n  inner: 0.5,\n"})'
                }
              </code>
            </pre>
          </section>
        </div>
      </article>

      <article>
        <h2 className="title">Random Examples</h2>
        <hr />

        <div className="grid">
          {Array.from({ length: 16 }, () =>
            Array.from({ length: Math.floor(Math.random() * 10 + 1) }, () =>
              Math.floor(Math.random() * 101)
            )
          ).map((set: number[]) => (
            <section key={set[0] + Math.random()} className="example-item">
              <div className="pie">
                <SimpleDoughnut borderColor="transparent" values={set} />
              </div>
              <pre>
                <code>{`<SimpleDoughnut\n  borderColor="transparent"\n  values={${JSON.stringify(
                  set
                )}}\n/>`}</code>
              </pre>
            </section>
          ))}
        </div>
      </article>

      {/* This article is for testing purposes */}
      {/* The deal is if there is only one value in the data array, simple-pie draws circle or doughnut instead of sectors */}
      {/* Before this solution it was buggy for some single values */}
      {/* May be in future I'll write snapshot test for this. But now this section is to check if everything is fine */}
      {/*<article>*/}
      {/*  <h2 className="title">Single Sector Test</h2>*/}
      {/*  <hr />*/}

      {/*  <div className="grid">*/}
      {/*    {[1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 26].map((value) => (*/}
      {/*      <>*/}
      {/*        <section className="example-item">*/}
      {/*          <div className="pie">*/}
      {/*            <SimplePie values={[value]} />*/}
      {/*          </div>*/}
      {/*        </section>*/}
      {/*        <section className="example-item">*/}
      {/*          <div className="pie">*/}
      {/*            <SimpleDoughnut values={[value]} />*/}
      {/*          </div>*/}
      {/*        </section>*/}
      {/*      </>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</article>*/}
    </main>
  );
}
