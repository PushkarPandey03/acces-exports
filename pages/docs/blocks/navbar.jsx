// // ./pages/docs/blocks/navbar.jsx
// import BlockLayout from 'components/layouts/BlockLayout';
// import CodeHighlight from 'components/reuseable/CodeHighlight';
// import * as all from 'markups/elements/navbar';

// const Navbars = () => {
//   return (
//     <BlockLayout title="Navbar">
//       <section className="wrapper bg-light">
//         <div className="container pt-15 pt-md-17">
//           <div className="alert alert-blue alert-icon" role="alert">
//             <i className="uil uil-exclamation-circle"></i> Disable dropdown hover by adding{' '}
//             <code className="code bg-primary text-white mt-n1">.hover-none</code> className to{' '}
//             <code className="code bg-primary text-white mt-n1">.navbar</code> on JSX.
//           </div>
//           <div className="alert alert-blue alert-icon" role="alert">
//             <i className="uil uil-exclamation-circle"></i> Disable carets on dropdown parents by adding{' '}
//             <code className="code bg-primary text-white mt-n1">.caret-none</code> className to{' '}
//             <code className="code bg-primary text-white mt-n1">.navbar</code> on JSX.
//           </div>
//           <div className="alert alert-blue alert-icon" role="alert">
//             <i className="uil uil-exclamation-circle"></i> Use{' '}
//             <a href="/docs/faq" className="external bg-primary text-white mt-n1" target="_blank">
//               this guide
//             </a>{' '}
//             to add a link to dropdown parent.
//           </div>
//         </div>
//       </section>

//       <Block id={1} markup={all.code1}>
//         <div className="container pt-12">
//           <h2 className="mb-3">Center Nav - Transparent Background</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/" className="external" target="_blank">
//               Demo 1
//             </a>{' '}
//             or{' '}
//             <a href="/demo-4" className="external" target="_blank">
//               Demo 4
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup1()}</div>
//       </Block>

//       <Block id={2} markup={all.code2}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-3">Center Nav - Transparent Background - Light Text</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/demo-3" className="external" target="_blank">
//               Demo 3
//             </a>{' '}
//             or{' '}
//             <a href="/demo-15" className="external" target="_blank">
//               Demo 15
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup2()}</div>
//       </Block>

//       <Block id={3} markup={all.code3}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-3">Center Nav - Light Background</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/shop-1" className="external" target="_blank">
//               Shop
//             </a>{' '}
//             or{' '}
//             <a href="/products/1" className="external" target="_blank">
//               Product Page
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup3()}</div>
//       </Block>

//       <Block id={4} markup={all.code4}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-0">Center Nav - Dark Background</h2>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup4()}</div>
//       </Block>

//       <Block id={5} markup={all.code5}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-3">Center Nav - Fancy</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/demo-7" className="external" target="_blank">
//               Demo 7
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup5()}</div>
//       </Block>

//       <Block id={6} markup={all.code6}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-3">Classic - Transparent Background</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/demo-6" className="external" target="_blank">
//               Demo 6
//             </a>{' '}
//             or{' '}
//             <a href="/demo-8" className="external" target="_blank">
//               Demo 8
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup6()}</div>
//       </Block>

//       <Block id={7} markup={all.code7}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-3">Classic - Transparent Background - Light Text</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/demo-11" className="external" target="_blank">
//               Demo 11
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup7()}</div>
//       </Block>

//       <Block id={8} markup={all.code8}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-0">Classic - Light Background</h2>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup8()}</div>
//       </Block>

//       <Block id={9} markup={all.code9}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-0">Classic - Dark Background</h2>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup9()}</div>
//       </Block>

//       <Block id={10} markup={all.code10}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-0">Classic - Fancy</h2>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup10()}</div>
//       </Block>

//       <Block id={11} markup={all.code11}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-0">Center Logo - Transparent Background</h2>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup11()}</div>
//       </Block>

//       <Block id={12} markup={all.code12}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-3">Center Logo - Transparent Background - Light Text</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/demo-13" className="external" target="_blank">
//               Demo 13
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup12()}</div>
//       </Block>

//       <Block id={13} markup={all.code13}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-0">Center Logo - Light Background</h2>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup13()}</div>
//       </Block>

//       <Block id={14} markup={all.code14}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-0">Center Logo - Dark Background</h2>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup14()}</div>
//       </Block>

//       <Block id={15} markup={all.code15}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-3">Extended</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/demo-12" className="external" target="_blank">
//               Demo 12
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup15()}</div>
//       </Block>

//       <Block id={16} markup={all.code16}>
//         <div className="container pt-15 pt-md-17">
//           <h2 className="mb-3">Extended - Alternative</h2>
//           <p className="lead mb-0">
//             Check out some of the live examples:{' '}
//             <a href="/demo-24" className="external" target="_blank">
//               Demo 24
//             </a>
//             .
//           </p>
//         </div>
//         <div className="container-fluid pt-10 pt-md-12 pb-12 pb-md-14 px-xxl-10">{all.markup16()}</div>
//       </Block>
//     </BlockLayout>
//   );
// };

// const Block = ({ id, children, markup }) => {
//   return (
//     <section id={`snippet-${id}`} className="wrapper bg-light wrapper-border">
//       {children}
//       <div className="container pb-15 pb-md-17 position-relative" style={{ zIndex: 3 }}>
//         <div className="card">
//           <div className="card-footer border-0 position-relative">
//             <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href={`#collapse-snippet-${id}`}>
//               View example's code
//             </a>
//           </div>
//           <div id={`collapse-snippet-${id}`} className="card-footer bg-dark p-0 accordion-collapse collapse">
//             <div className="code-wrapper">
//               <div className="code-wrapper-inner">
//                 <CodeHighlight language="jsx">{markup}</CodeHighlight>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbars;