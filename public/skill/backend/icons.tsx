interface Props {
  fill?: string
  className?: string
}

const Python = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    aria-label='Python'
    viewBox='0 0 512 512'
    {...props}
  >
    <rect width={512} height={512} rx='15%' fill='#fff' />
    <g fill='#5a9fd4'>
      <path
        id='a'
        d='M254 64c-16 0-31 1-44 4-39 7-46 21-46 47v35h92v12H130c-27 0-50 16-58 46-8 35-8 57 0 93 7 28 23 47 49 47h32v-42c0-30 26-57 57-57h91c26 0 46-21 46-46v-88c0-24-21-43-46-47-15-3-32-4-47-4zm-50 28c10 0 17 8 17 18 0 9-7 17-17 17-9 0-17-8-17-17 0-10 8-18 17-18z'
      />
    </g>
    <use xlinkHref='#a' fill='#ffd43b' transform='rotate(180 256 255)' />
  </svg>
)

const Flask = (props: Props) => (
  <svg width={32} height={32} xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M9.563 27.542c-1.219-.964-2.521-1.88-3.406-3.177-1.87-2.281-3.313-4.922-4.297-7.703-.594-1.802-.797-3.74-1.563-5.479-.802-1.255.135-2.635 1.516-3.036.615-.12 1.698-.698.391-.281-1.172.854-1.281-.781-.083-.885.818-.109 1.12-.781.839-1.38-.875-.573 2.135-1.203.62-2.063-1.578-1.703 2.208-2.031 1.276-.099-.224 1.49 2.646-.271 1.979 1.448.677.823 2.531.188 2.484 1.344.99.068 1.328.896 2.25.958.964.438 2.698.776 3.026 1.854-.953.755-3.156-1.552-3.26.531.286 3.078.214 6.25 1.339 9.182.536 1.776 1.828 3.177 2.995 4.557 1.115 1.359 2.625 2.307 4.167 3.115 1.354.635 2.813 1.057 4.286 1.323.594-.458 1.651-2.156 2.583-1.438.042.802-1.849 1.682-.089 1.594 1.031-.313 1.75.797 2.604-.203.781.927 3.26-.594 2.703 1.307-.755.484-1.859.193-2.615.859-1.245-.62-2.24.557-3.62.411a26.704 26.704 0 0 1-4.646.385c-2.547-.203-5.151-.286-7.578-1.172-1.365-.401-2.698-1.177-3.901-1.953zm2.151.932c1.333.573 2.641 1.182 4.104 1.37 2.318.318 4.714.818 7.042.365-1.052-.479-2.146.188-3.193-.344-1.26.271-2.609-.068-3.891-.234-1.453-.646-3.026-1.094-4.391-1.938-1.698-.62.88.797 1.344.917 1.063.604-1.172-.313-1.484-.563-.891-.5-1.005-.396-.089.109.182.109.365.224.557.318zm-2.537-1.797c1.292.479-.005-.906-.599-.828-.26-.453-1-.745-.479-.984-.943.323-.984-1.24-1.427-1.021-.995-.313-.385-1.422-1.568-2.104-.109-.719-1.177-1.344-1.521-2.432-.151-.552-1.203-2.151-.557-.667.552 1.432 1.526 2.656 2.333 3.88.63 1.161 1.37 2.38 2.516 3.104.385.37.755.938 1.302 1.052zm-3.724-4.088c.042-.193.234.422 0 0zm5.271 4.661c.286-.125-.411-.156 0 0zm.703.26c-.073-.354-.323.193 0 0zm.88.365c.417-.401-.646-.25 0 0zm1.506.839c.255-.375-.818-.141 0 0zm-2.891-2.016c.646-.422-.844-.005 0 0zm.656.328c-.016-.224-.234.099 0 0zm3.292 2.057c.531.333 3.094.729 1.49.135-.266.057-2.974-.766-1.49-.135zM9.646 25.01c-.052-.224-.823-.25 0 0zm1.531.891c.401-.276-.828-.214 0 0zm1.292.792c.573-.214-.932-.219 0 0zm-3.448-2.365c.62.479 2.505.063.953-.281-.708-.38-2.302-.635-1.219.224zm4.318 2.641c.26-.443-1.083-.255 0 0zm-1.313-1.047c1.521.432-1.276-.958-.375-.156l.203.089zm2.635 1.521c1.437.016-1.302-.198 0 0zm-6.192-3.948c-.057-.266-.354.026 0 0zm8.625 5.312c.036-.484-.469.365 0 0zM10.922 25c-.089-.255-.448-.01 0 0zm-2.318-1.672c.823-.047-1.13-.365 0 0zm-2.75-1.776c-.099-.396-.896-.708 0 0zm7.214 4.583c-.151-.177-.073.036 0 0zm4.484 2.75c-.01-.26-.24.099 0 0zm-4.88-3.161c.078-.344-.708-.104 0 0zm-3.344-2.125c.609-.063-.984-.411 0 0zm5.656 3.516c.953-.38-.938-.188 0 0zm-2.942-1.995c1.104.141-1.313-.75-.245-.078zm3.833 2.359c1.031-.62.693 1.443 1.75.172 1.042-.76-.901.943.385.135.927-.62 2.302.297 3.167.594.625-.031 1.234.542 1.87.193 1.234-.333-2.406-.49-1.453-1.078-1.125.328-1.958-.391-2.51-1.115-1.266-.292-2.724-.938-3.354-2.057-.26-.417.37.063-.224-.625-.76-.677-1.141-1.448-1.651-2.271-.609-.323-.682-1.281-.745-.031.005-.792-.74-1.323-.917-1.099-.005-.76.792-.38.234-.943-.12-.792-.516-1.615-.635-2.505-.182-.427-.026-1.344-.63-.375-.219 1.026-.073-1.26.271-.505.448-.771-.161-.682-.188-.573.292-.651.188-1.573-.078-1.224.156-.688.25-2.536-.234-2.208.292-.719.552-3.297-.708-2.313-.516.005-1.401.188-1.818.396 1.313.724-.135.26-.667.146-.068.667-.599.38-1.26.385 1.057.13-.516 1.078-1.125.714-.786.375.682 1.313.016 1.604.083.438-1.203-.156-1.104.854-.766-.323-.104 1.203.276.688 1.302.349.917 1.151.948 1.917-.208.443-1.042-1.047-.182-.979-.677-1.099-.75-.396-1.318.115-.13.036 1.443.729.458 1.073.865.13.891.891 1.063 1.37.521.547.417-.599 1.042.057-.396-.583-2.089-1.641-.729-1.302-.005-.583-.245-1.057.172-1.042.417-.75-.432 1.849.5.896.26-.115.323-.75.792.057.672.667.24 1.146-.708.536.167.578 1.271.786 1.063 1.688.219.797.526.5.797.458.208.771.328.203.339-.167.964.208.734.776 1.036 1.177.661.297-.948-2.031.193-.703 1.193 1.083.448 1.531-.63 1.359.682-.052.901.922 1.75.885.776.37 1.302 1.786-.036 1.198-.464-.417-2.104-.938-.76-.141 1.24.573 2.219.917 3.417 1.635.849.609 1.224 1.313 1.547 1.448-.719.344-2.167-.276-1.094-.464-.667-.12-1.422-.458-.781.375.547.458 1.932.406 2.182.458-.214.464-.573.5.01.536-.651.349.208.401.266.599zm-1.323-3.745c-.396-.417-.5-1.188-.073-.516.219.089.703 1.266.073.516zm4.318 2.74c.245-.01.005.188 0 0zm-4.943-3.755c-.016-.62.141.484 0 0zm-.432-.573c-.495-.958.63.271 0 0zm-5.198-3.594c.292-.078.141.5 0 0zm4.141 2.245c.177-.672.208.568 0 0zM9.51 18.766c-.203-.37.432.349 0 0zm2.511.802c-.469-1.052.333-.573.104.177zm-4.328-2.886c-.208-.344-.557-1.359-.443-1.667.099.5 1.068 2.167.474.688-.656-1.24.786.401.938.714.068.307-.406-.083-.089.635-.583-.823-.344.453-.88-.37zm-1.339-.922c.057-.802.307.552 0 0zm.604.209c.286-.609.484.844 0 0zm-1.448-1.12c-.5-.495-.859-.953.021-.307.344.01-.75-1.036.083-.333.88.161.432 1.443-.104.641zm.761-.021c.292-.286.151.281 0 0zm.469.151c-.438-.823.531.344 0 0zm-.933-.89c-1.448-1.286 1.823.677.234.24zM9.958 16.5c-.63-.375-.167-2.646.047-1.094.609-.198-.036.802.417.792-.068.63-.271.859-.464.302zm1.532.906c.063-.682.13.469 0 0zm-.266-.265c.068-.292.005.344 0 0zm-5.13-3.474c-.932-1.286 2.703 1.297.594.323-.219-.057-.484-.078-.594-.323zm2.953 1.567c-.089-1.083.198.177 0 0zm2.245 1.438c.172-.615.01.406 0 0zm-5.058-3.495c.552-.12 2.292.969.693.313-.177-.198-.552-.109-.693-.313zm4.745 2.365c.063-1.104.333-.661.005.156zm-4.333-2.75c.224-.328-.599-1.495.12-.417.307.245.896.411.375.516.818.719-.198.193-.495-.099zm4.099 2.406c.156-1.26.141.734 0 0zM6.177 11.63c.172-.073.089.229 0 0zm1.068.636c.276-.578.505.646 0 0zm3.015 1.682c0-.224.057.318 0 0zm-.171-.391c-.417-1.031.391.547 0 0zm-.261-.677c-.068-.427.245.536 0 0zm.422-.682c-.286-.505.365-2.229.432-1.161-.302.833-.083 1.302.125.182.391-.88-.083 1.74-.557.979zm.427-2.563c.125-.156.031.182 0 0zm-.713 14.151c-.172-.151.021.094 0 0zm1.479.745c.818.214.818-.125.073-.224-.401-.375-1.661-.771-.531-.047.073.188.313.182.453.271zm-2.922-1.937c.453.339 1.703.958.641.125.359-.411-.682-.635-.339-.911-.875-.542-.693-.49-.073-.474-1.063-.474.151-.438.094-.682-.411-.078-2.026-.719-1.073.052-.969-.49-.234.188-.526.115-.99-.271.88.755-.156.5.568.448 1.531 1.151.24.474-.172.245.922.615 1.193.802zm1.547.89c1.88.604-.922-.745 0 0zm7.916 4.797c.026-.375-.255.318 0 0zm.818.344c.432-.422.016.667.719-.104.005-.552-.021-.88-.807-.208-.219.12-.313.63.089.313zm-12.927-8.12c-.13-.521-.932-.521 0 0zm.87.573c-.323-.536-1.151-.484 0 0zm4.948 2.985c.484.427 2.219.313.589.052-.245-.359-1.536-.271-.589-.052zm6.797 4.197c.745-.625-.719.276 0 0zm1.546 1.058c.005-.198-.318.089 0 0zm0-.276c.823-.875-.797.052 0 0zM3.74 18.719c-.703-1-.438-1.453-1.115-2.266-.125-.63-1.156-2.047-.531-.542.573.875.745 2.234 1.646 2.807zM19.781 28.76c1.516-.974-.62-.422 0 0zm1.157.454c.76-.646-.479-.135 0 0zM5.62 19.401c.219-.323-.557-.042 0 0zm15.073 9.505c.734-.474-.167-.401-.13.042zm-9.959-6.281c-.026-.318-.391.026 0 0zm.615.354c-.198-.396-.302.063 0 0zm10.526 6.25c.938-.682-.573-.135-.198.125zm-.359-.177c.766-.641-.813.286 0 0zm1.838 1.224c.516-.344-.625-.109 0 0zM6.094 19.167c.688.156 2.755 1.698 1.536.109-.625-.188-.25-1.714-.891-1.443.427.714.354 1.021-.542.568-1.13-.547-.635.276-.417.5-.297.068.401.26.313.266zm-3.141-2.479c.12-.51-1.141-2.807-.599-1.151.198.344.177 1.005.599 1.151zm5.761 3.557c-.354-.297-.016-.047 0 0zm.875.203c0-.542-.964-.219 0 0zm7.578 4.776c-.146-.37-.573-.01 0 0zm.364.266c-.052-.208-.208.036 0 0zm3.005 1.89c.286-.214-.359-.026 0 0zM4.521 17.089c.828-.323-.885-.229 0 0zM16.5 24.635c-.01-.536-.526.135 0 0zM4.193 16.328c.531-.182-.49-.12 0 0zm1.541.745c-.01-.177-.161.068 0 0zm18.787 11.521c.682-.135 2.24.349 2.49-.182-.828-.016-2.87-.583-2.964.135l.182.031zM6.224 17.198c.01-.542-.422-.021 0 0zm-4.052-2.813c-.182-1.031-.698-.156 0 0zm.969.245c.01-.333-.885-.302 0 0zm.552.271c-.161-.13-.125.161 0 0zm3.468 2.224c.167-.146-.385-.109 0 0zm-3.838-2.833c-.094-.781-1.12-.12 0 0zm-1.979-1.287c-.026-.359-.193.135 0 0zm.291-.224c-.047-.427-.25.052 0 0zm1.631.974c.688-.271-1.255-.563-.141-.052zm21.776 13.448c.443-.401-.557-.125 0 0zm2.635 1.365c.172-.521-.448.068 0 0zM3.432 12.901c.073-.505-.547.099 0 0zm-2.317-1.552c-.125-.714-.104-1.964 1.083-1.542-1.589.318 1.099 1.974.76.667.667.031 1.307-.396.953.255 1.318-.146 2.229-1.286 3.5-1.13.99-.13 2.073-.229 3.141-.625.875-.068 1.719-1.01 1.24-1.568-1.198-.104-2.448.047-3.771.307-1.464.307-2.792.885-4.271 1.135-1.443.193.286.531-.125.609-.75.26.896.438-.099.708-.609-.115-1.25-.328-.99-.974-1.38.177-2.594.755-1.5 2.156zm3.328-1.693c.323-1.193 1.734.979.531.156-.146-.104-.38-.193-.531-.156zm.062-.578c.464-.344.245.193 0 0zm.594.011c.042-.547 1.354.292.214.198zm.807-.329c.297-.344.089.313 0 0zm.209-.135c.495-.594 2.797-.38 1.109-.057-.448-.339-.797.198-1.109.057zm3.005-.464c-.078-1.62 1.49.578 0 0zm.849-.005c.313-.818 1.208-.328.146-.167.021.089-.031.422-.146.167zm-6.875 4.328c.932-.573-.984-.495 0 0zm.687.193c.328-.349-.708-.146 0 0zm-2.026-1.443c.531-.406-.625-.156 0 0zm27.474 17.188c.016-.474-.406.214 0 0zm-2.791-1.906c.078-.547-.359.047 0 0zm3.557 2.088c.745 0 2.25-.229.635-.229-.255.042-1.479.031-.635.229zM4.385 12.339c.604-.042.943-.661-.115-.625-1.641-.172 1.443.557-.208.349-.224.146.313.318.323.276zm.532.27c-.063-.391-.188.203 0 0zm.625-1.677c.266-.323-.359-.089 0 0zm-2-3.343c1.078-.365 2.547-.776 3.052.177-.516-.62-.208-1.229.281-.323.688.922 1.031-.417.583-.724.51.635 1.089.932.344.036.813-.974-1.63.13-2.188.12-.266.12-2.76.635-2.068.714zm.63-1.204c.615-.464 2.12.271 1.151-.464-.089-.078-2.115.557-1.151.464zm2.234.089c.719.021-.307-.958.547-.516-.141-.458-.995-.547-1.417-.729-.234.422.484 1.25.87 1.245zM4.568 4.448c.245-.333-.438.172 0 0zm.911.219c1.151-.151-.297-.495-.234-.01zM3.776 3.333c-.813-1.063 1.526.182.703-.932-.698-.552-1.365.625-.703.932zm10.432 5.62c.375-.661-1.542-.891-.25-.234.12.042.089.281.25.234z' />
  </svg>
)

const Django = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Django Project'
    viewBox='0 0 512 512'
    {...props}
  >
    <rect width={512} height={512} rx='15%' fill='#113228' />
    <path
      fill='#fff'
      d='M227 101h56v257c-29 5-50 8-73 8-69 0-104-31-104-90 0-57 37-93 96-93 9 0 16 0 25 2zm0 129c-7-2-12-3-19-3-29 0-45 18-45 48s15 46 44 46c6 0 11 0 20-2zm145-44v129c0 45-3 66-13 84-9 18-21 29-46 42l-52-25c25-11 37-22 44-37 8-16 11-34 11-83V186zm-56-85h56v57h-56z'
    />
  </svg>
)

export { Python, Flask, Django }
