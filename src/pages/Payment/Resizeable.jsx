import { useState } from 'react'

const ResizableComponent = () => {
  const [height, setHeight] = useState(200) // Initial height

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (e) => {
    console.log(window.screen.height)
    setHeight(window.screen.height - e.clientY)
    console.log(e)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
  }

  return (
    <div
      className='resize-section'
      style={{
        position: 'fixed',
        bottom: '0',
        width: '50%',
        height: `${height}px`,
        border: '1px solid #ccc',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          height: '10px',
          background: 'red',
          cursor: 'ns-resize'
        }}
        onMouseDown={handleMouseDown}
      />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
      atque, officia aliquid mollitia ex est repellendus odit praesentium.
      Veniam odit nam optio velit error temporibus commodi laboriosam vero
      dolores iusto ut doloribus consequatur qui autem quos corrupti cum quo
      itaque dolor, fuga alias voluptates eum omnis. Sed ea molestias fuga animi
      harum, repellat dicta nemo deserunt quibusdam autem, beatae vitae impedit
      quod, sequi rerum. Illum error ratione voluptatibus iure perferendis vitae
      architecto maiores pariatur, cupiditate corrupti ut a neque ipsa culpa
      atque harum, temporibus inventore voluptates praesentium quidem. Incidunt
      fugit ab dicta aspernatur molestiae illo ullam iste harum vel repellendus
      veritatis eligendi, eaque voluptates consequatur nesciunt reprehenderit
      quis provident laboriosam, pariatur maiores vitae! Quaerat aspernatur
      maiores adipisci exercitationem nesciunt perferendis harum aut. Cumque
      quisquam culpa totam tempore maiores voluptates. Corrupti fugit nemo, non
      voluptatibus distinctio debitis aliquid impedit molestiae numquam dolorum
      ex, alias sint dolor suscipit cumque, sunt totam maxime in eligendi ea
      nobis dignissimos quisquam modi perferendis! Odit illum, maxime in saepe
      magnam illo nisi ratione quas aperiam blanditiis, doloribus dolorum enim
      pariatur distinctio corrupti commodi deleniti sed id sunt? Aut illo itaque
      facilis minus adipisci nihil aliquam non inventore nisi velit, fugiat
      nulla, harum excepturi cum dolor magnam accusantium neque dolorem ab
      obcaecati quibusdam, commodi libero natus? Dolorem quasi, accusamus
      architecto vero voluptatum molestias aut dolorum aliquam dolor beatae. Aut
      est ipsam consequatur omnis totam, sit iure, quos sapiente labore aperiam
      similique maiores nemo quasi, sint nesciunt. Itaque accusantium id animi,
      doloremque ipsa, odit maxime ex deleniti laboriosam eum laudantium
      incidunt. Quaerat quidem asperiores voluptatibus sint dolorum, consectetur
      animi sunt deserunt autem fuga temporibus, molestiae harum fugiat aliquid
      recusandae tempore architecto. Explicabo, doloribus quis beatae adipisci
      omnis quisquam maxime. Unde incidunt eveniet sint commodi, eos cum quas?
      Optio illo atque, nulla enim libero at exercitationem laboriosam
      voluptatum et a consectetur saepe fugit. Reiciendis voluptatum nesciunt
      quas non asperiores sed, ipsa ex, consequatur laborum molestiae officiis
      earum recusandae eaque distinctio officia atque corporis, autem maiores.
      Alias tempore cum nulla quasi? Veniam sunt tempore eos soluta at, impedit
      pariatur est odio maiores consequuntur vel perspiciatis eligendi cumque,
      amet quae velit ullam omnis. Obcaecati, adipisci nostrum. Explicabo,
      consectetur placeat enim ab voluptate nostrum nesciunt, repellat impedit
      dicta nulla esse, labore fugiat. In sapiente repudiandae libero numquam
      recusandae adipisci fugit aliquam sed provident assumenda pariatur, nulla
      harum cum, nisi unde saepe natus dolor enim, magnam deserunt asperiores
      quia cumque eum? Perferendis, eligendi maxime. Autem facere sit expedita
      in repellat est animi eius rerum iusto a reprehenderit modi quasi, eveniet
      vitae laborum, necessitatibus exercitationem rem assumenda porro nobis
      velit. Rerum qui dolore dolores similique vel sint repellendus earum
      accusamus laborum, voluptatem ullam sunt, perferendis repudiandae nemo
      alias praesentium non vitae quod placeat nesciunt sapiente? Expedita
      voluptatibus assumenda officia iusto. Eius eaque incidunt commodi totam
      quasi quisquam consectetur reiciendis aut fuga fugit placeat fugiat, nisi
      impedit distinctio quae excepturi quia alias velit vitae quis voluptates?
      Maiores quia pariatur laudantium provident tempora maxime hic? Dolores,
      adipisci. Modi sequi neque tempora ea sit rerum atque sint nostrum libero
      molestiae itaque non distinctio optio doloribus consequatur autem dicta,
      maiores quaerat cupiditate in, fugit voluptate eius nemo sed! Accusamus
      architecto vitae esse in odio neque ipsam velit laborum adipisci magnam
      atque fugit distinctio culpa ipsa, facilis quasi beatae! Obcaecati
      consequatur iusto omnis repudiandae deserunt ratione quibusdam quia
      ducimus amet? Fugit quod inventore alias molestiae blanditiis adipisci
      natus numquam labore sed? Corrupti totam saepe neque, tempore vitae ullam
      veritatis a consequatur, impedit nisi cumque quia nulla id? Ratione,
      aspernatur commodi repudiandae expedita, culpa similique, fugit sed atque
      iste voluptates itaque mollitia veritatis illo. Eos tempore neque aliquid
      culpa placeat nam nulla vero blanditiis odit, aspernatur corporis
      similique quo a animi repellat! Iure nam temporibus similique commodi
      possimus ullam, accusantium eos harum modi ab quasi quia magnam quis
      eveniet soluta exercitationem dolores quaerat dolor repellendus
      repudiandae quo distinctio dolore. Nulla laudantium, vitae quis minima
      ullam nobis perspiciatis quidem sequi, consequuntur perferendis velit
      deserunt praesentium dolore impedit id qui numquam sapiente voluptatibus
      accusamus asperiores. Maiores unde voluptates cupiditate enim excepturi
      voluptatem iure. Numquam magnam possimus nemo ut et illo corrupti, rerum
      earum, incidunt harum, facere quibusdam beatae voluptatibus laboriosam
      reprehenderit maxime dolorum aliquam adipisci accusamus. Aspernatur
      laboriosam voluptate officiis placeat reprehenderit libero quo fugit
      similique obcaecati magnam quis recusandae, esse dignissimos, enim natus
      aut ipsum dicta quasi, blanditiis incidunt consequuntur laudantium aliquam
      maxime est. Quam iste perferendis ipsum asperiores sapiente! Molestias
      reprehenderit omnis impedit culpa nisi, tempora eum aspernatur illum
      repellat, laboriosam blanditiis officia autem doloremque optio libero
      numquam dignissimos ex obcaecati eaque placeat voluptatum ut? Accusantium
      eum amet sint officia, repudiandae reiciendis porro tempora quibusdam
      natus repellendus cum at eligendi incidunt, laborum consequuntur. Magni
      cumque omnis perspiciatis? Eos magni delectus cum exercitationem, fugiat
      cupiditate quas dolore adipisci deserunt laborum repudiandae omnis iure
      temporibus ipsam magnam nisi? Pariatur suscipit ad quod ex quisquam totam
      quidem iste omnis similique delectus eum reiciendis, libero asperiores
      natus consectetur quae molestiae repellendus nobis voluptatibus facilis,
      quia in praesentium ut nulla. Pariatur quae soluta nisi, praesentium
      minima cumque provident. Sed expedita, numquam neque, illo accusantium
      architecto porro distinctio necessitatibus repellendus, quaerat minus
      adipisci? Vero accusamus corporis doloremque optio repellendus assumenda
      labore est enim quia quod voluptatem eveniet, aperiam numquam perspiciatis
      error nostrum esse deserunt neque, aut, beatae ipsa inventore quas
      laboriosam quasi. Est labore asperiores consequuntur ad, repellat voluptas
      ipsa eius nihil, esse repellendus totam! Deserunt quod facere a ut
      voluptatibus fugit, porro nesciunt eius, debitis nisi aspernatur
      accusantium sapiente eum vero laborum quidem pariatur. Nostrum culpa
      accusantium saepe alias porro possimus? Quia aliquam perferendis tenetur?
      Libero voluptatem eveniet, obcaecati officiis cum commodi? Vero, totam et?
      Tempora maiores incidunt reprehenderit consequuntur, optio ut velit animi
      rem iusto? Ducimus quasi sunt amet ratione odit voluptatem velit beatae
      illum voluptates ex libero eligendi id obcaecati, corrupti, magnam
      voluptatibus, dolores incidunt rem atque? Nostrum laudantium magnam illo
      error eveniet perspiciatis inventore officiis, beatae laboriosam corporis
      est quaerat incidunt, sapiente, doloremque quo perferendis possimus minima
      corrupti. Aut ipsam asperiores itaque autem, natus quam alias quo saepe
      odio commodi illum sapiente?
    </div>
  )
}

export default ResizableComponent
