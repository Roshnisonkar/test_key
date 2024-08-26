import React from 'react'
import stu from '../assets/img/stu.jpeg'
import Layout from './Layout'

const HomePage = () => {
  return (
   <>
   <Layout>
   <br />
   <center><h2>WelCome Our Home Page</h2></center>
   <div class="container">
  <div class="row">
    <div class="col">
      <h1>Hello WelCome &nbsp;
        <span style={{color:"#fff"}}>Students</span></h1>
        <p className='text-capitalize  justify-content-between' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt accusamus commodi soluta ad hic molestiae. Accusamus, rem aperiam delectus facere qui fugiat? A omnis deserunt magni officia delectus atque consequuntur? Vitae, sint nihil, provident enim officia est esse nulla distinctio maiores earum ratione. Odit, provident asperiores! Inventore, maiores accusantium eligendi vel incidunt esse nobis repellendus eos harum nam. Quod, ut eaque. Corporis voluptatum laborum necessitatibus sequi est adipisci alias provident labore beatae, temporibus optio, delectus minima nostrum unde eos assumenda expedita obcaecati quos dolorum eligendi amet id? Provident magnam eius dolores, suscipit illo dicta accusamus harum iusto distinctio, laboriosam sed. Id voluptate eveniet ut numquam earum ipsa temporibus. Consectetur voluptatum at aperiam pariatur, maxime quis adipisci sequi laboriosam porro possimus voluptas in velit sapiente, aliquam facilis eos ab quibusdam earum nobis nisi corrupti commodi deleniti odio alias. Expedita libero consectetur laborum voluptatum et quo officiis cumque veniam beatae provident? Vero aperiam quis doloremque totam, beatae doloribus qui. Ipsum nam commodi totam, pariatur error inventore sit ex corrupti aspernatur. Totam cupiditate modi optio aspernatur ipsa quasi iusto voluptas exercitationem perspiciatis, iure cumque consequatur. </p>
    </div>
    <div class="col">
      <img src={stu} className='img-fluid' />
    </div>
  </div>
  </div>
  </Layout>
   </>
  )
}

export default HomePage