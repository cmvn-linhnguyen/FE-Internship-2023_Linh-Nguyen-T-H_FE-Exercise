const data = [
  {
    id: 1,
    author: {
      name: 'Trang Nguyen',
      image: './assets/images/avatar.png',
    },
    posted_day: 'Aug 15, 2019',
    title: 'WFH: A Comprehensive Guide to Working Remotely from Home',
    description:
      'First of all: What Does WFH Mean in 2021? It still means Working from Home. The term WFH caught on after many organizations worldwide were force',
    image: './assets/images/post-image.png',
    likes: 12,
    comments: 12,
    tags: ['React', 'JavaScript', 'Remote Work'],
  },
  {
    id: 2,
    author: {
      name: 'Trang Nguyen',
      image: './assets/images/avatar.png',
    },
    posted_day: 'Aug 15, 2019',
    title: 'WFH: A Comprehensive Guide to Working Remotely from Home',
    description:
      'First of all: What Does WFH Mean in 2021? It still means Working from Home. The term WFH caught on after many organizations worldwide were force',
    image: './assets/images/post-image.png',
    likes: 12,
    comments: 12,
    tags: ['React', 'JavaScript', 'Remote Work'],
  },
  {
    id: 3,
    author: {
      name: 'Trang Nguyen',
      image: './assets/images/avatar.png',
    },
    posted_day: 'Aug 15, 2019',
    title: 'WFH: A Comprehensive Guide to Working Remotely from Home',
    description:
      'First of all: What Does WFH Mean in 2021? It still means Working from Home. The term WFH caught on after many organizations worldwide were force',
    image: './assets/images/post-image.png',
    likes: 12,
    comments: 12,
    tags: ['React', 'JavaScript', 'Remote Work'],
  },
  {
    id: 4,
    author: {
      name: 'Trang Nguyen',
      image: './assets/images/avatar.png',
    },
    posted_day: 'Aug 15, 2019',
    title: 'WFH: A Comprehensive Guide to Working Remotely from Home',
    description:
      'First of all: What Does WFH Mean in 2021? It still means Working from Home. The term WFH caught on after many organizations worldwide were force',
    image: './assets/images/post-image.png',
    likes: 12,
    comments: 12,
    tags: ['React', 'JavaScript', 'Remote Work'],
  },
  {
    id: 5,
    author: {
      name: 'Trang Nguyen',
      image: './assets/images/avatar.png',
    },
    posted_day: 'Aug 15, 2019',
    title: 'WFH: A Comprehensive Guide to Working Remotely from Home',
    description:
      'First of all: What Does WFH Mean in 2021? It still means Working from Home. The term WFH caught on after many organizations worldwide were force',
    image: './assets/images/post-image.png',
    likes: 12,
    comments: 12,
    tags: ['React', 'JavaScript', 'Remote Work'],
  },
  {
    id: 6,
    author: {
      name: 'Trang Nguyen',
      image: './assets/images/avatar.png',
    },
    posted_day: 'Aug 15, 2019',
    title: 'WFH: A Comprehensive Guide to Working Remotely from Home',
    description:
      'First of all: What Does WFH Mean in 2021? It still means Working from Home. The term WFH caught on after many organizations worldwide were force',
    image: './assets/images/post-image.png',
    likes: 12,
    comments: 12,
    tags: ['React', 'JavaScript', 'Remote Work'],
  },
];

const renderPosts = (data) => {
  const postSectionEl = document.getElementsByClassName('post-section')[0];
  console.log(postSectionEl);

  const postListEl = document.createElement('ul');
  postListEl.className = 'post-list';

  data.map((item) => {
    const postItemEl = document.createElement('li');
    postItemEl.className = 'post-item';

    postItemEl.innerHTML = `
        <a class="post-link" href="./post-detail.html">
                    <div class="post-card" id="post-card-${item.id}">
                      <div class="d-flex jc-between ai-center post-header">
                        <div class="d-flex ai-center post-info">
                          <img
                            class="img author-avatar"
                            src=${item.author.image}
                            alt="Avatar"
                          />
                          <p class="author-name">${item.author.name}</p>
                          <p class="post-date">${item.posted_day}</p>
                        </div>
                        <span class="post-show-more">...</span>
                      </div>
                      <div class="row post-content">
                        <div class="col col-8 post-body">
                          <h4 class="post-title">
                            ${item.title}
                          </h4>
                          <p class="post-desc text-truncation">
                            ${item.description}
                          </p>
                        </div>
                        <img
                          class="col col-4 img post-image"
                          src=${item.image}
                          alt="Post Image"
                        />
                      </div>
                      <div class="row post-footer">
                        <div
                          class="col col-8 d-flex ai-center jc-between post-footer-wrap"
                        >
                          <ul class="d-flex reaction-list">
                            <li class="reaction-item">
                              <div class="d-flex ai-center reaction-wrap">
                                <button class="reaction-button">
                                  <img
                                    class="icon reaction-icon"
                                    src="./assets/icons/ic-like.svg"
                                    alt="Like Icon"
                                  />
                                </button>
                                <span class="reaction-amount">${item.likes}</span>
                              </div>
                            </li>
                            <li class="reaction-item">
                              <div class="d-flex ai-center reaction-wrap">
                                <button class="reaction-button">
                                  <img
                                    class="icon reaction-icon"
                                    src="./assets/icons/ic-comment.svg"
                                    alt="Comment Icon"
                                  />
                                </button>
                                <span class="reaction-amount">${item.comments}</span>
                              </div>
                            </li>
                          </ul>
                          <ul class="d-flex tag-list">
                            <li class="tag-item">
                              <a class="tag-link" href="">
                                <div class="tag">
                                  <h5 class="tag-title">${item.tags[0]}</h5>
                                </div>
                              </a>
                            </li>
                            <li class="tag-item">
                              <a class="tag-link" href=""
                                ><div class="tag">
                                  <h5 class="tag-title">${item.tags[1]}</h5>
                                </div></a
                              >
                            </li>
                            <li class="tag-item">
                              <a class="tag-link" href=""
                                ><div class="tag">
                                  <h5 class="tag-title">${item.tags[2]}</h5>
                                </div></a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
        `;

    postListEl.appendChild(postItemEl);
  });

  postSectionEl.appendChild(postListEl);
};

renderPosts(data);
