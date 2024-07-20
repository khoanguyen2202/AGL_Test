const tabs = [
  {
    title: "検査結果画面の解説",
    link: "#",
  },
  {
    title: "主な機能",
    link: "#",
  },
  {
    title: "利用シーン別ガイド",
    link: "#",
  },
  {
    title: "初めてご利用の方へ",
    link: "#",
  },
  {
    title: "初めてご利用の方へ",
    link: "#",
  },
];

const topics = [
  {
    image: "./assets/images/topic1.svg",
    alt: "Topic 1",
    title: "利用シーン別ガイド",
    text: "SALES SCOREを様々なシーンでご活用いただく方法をご紹介します。",
  },
  {
    image: "./assets/images/topic2.svg",
    alt: "Topic 2",
    title: "検査結果画面の解説",
    text: "SALES SCOREのアウトプット項目について紹介します。",
  },
  {
    image: "./assets/images/topic3/アートワーク 39.png",
    alt: "Topic 3",
    title: "主な機能",
    text: "SALES SCOREの利用方法及び、ツールに表示される項目について紹介します。",
  },
];

const headings = [
  {
    title: "適性検査のアウトプット",
  },
  {
    title: "企業傾向分析",
  },
  {
    title: "検査結果詳細",
  },
  {
    // 4
    title: "管理者",
    content: ["・管理者の登録・編集", "・表示される管理者情報"],
  },
  {
    // 5
    title: "従業員",
    content: ["・従業員の登録・編集", "・表示される従業員情報"],
  },
  {
    // 6
    title: "応募者",
    content: ["・応募者の登録・編集", "・表示される応募者情報"],
  },
  {
    // 7
    title: "実績データの登録",
    content: [
      "・実績の登録・編集",
      " ・分析対象範囲の指定",
      "・成績区分の指定",
    ],
  },
  {
    // 8
    title: "適性検査",
    content: [
      "・適性検査推奨環境",
      "・受検メールの送信",
      "・ＵＲＬの発行",
      "・受検者のステータス",
      "・検査実施項目",
    ],
  },
  {
    // 9
    title: "ダッシュボード機能",
    content: ["・実績データ分析機能", "・運用サポート機能"],
  },
  {
    // 10
    title: "契約について",
    content: ["・契約情報の確認", "・解約の方法"],
  },
];

const items = [
  {
    link: "./assets/icons/icon1.svg",
    text: "受検者の営業活動の特徴を 見える化したい",
    type: "icon",
    group: 0,
  },
  {
    link: "./assets/icons/icon2.svg",
    text: "ポテンシャルの高い人材を 採用したい",
    type: "icon",
    group: 0,
  },
  {
    link: "./assets/icons/icon3.svg",
    text: "離職率を改善したい",
    type: "icon",
    group: 0,
  },
  {
    link: "./assets/icons/icon4.svg",
    text: "成績優秀層を分析したい",
    type: "icon",
    group: 0,
  },
  {
    link: "./assets/icons/icon5.svg",
    text: "自社の特徴を理解したい",
    type: "icon",
    group: 0,
  },
  {
    link: "./assets/icons/icon6.svg",
    text: "社員のコミュニケーションを 改善したい",
    type: "icon",
    group: 0,
  },
  {
    link: "./assets/icons/board1.svg",
    text: "データサマリー",
    type: "board",
    group: 1,
  },
  {
    link: "./assets/icons/board2.svg",
    text: "データ詳細",
    type: "board",
    group: 1,
  },
  {
    link: "./assets/icons/board3.svg",
    text: "データ比較",
    type: "board",
    group: 1,
  },
  {
    link: "./assets/icons/board4.svg",
    text: "全体比較",
    type: "board",
    group: 2,
  },
  {
    link: "./assets/icons/board5.svg",
    text: "営業タイプ傾向",
    type: "board",
    group: 2,
  },
  {
    link: "./assets/icons/board6.svg",
    text: "High-Low分析",
    type: "board",
    group: 2,
  },
  {
    link: "./assets/icons/board7.svg",
    text: "構成比比較",
    type: "board",
    group: 2,
  },
  {
    link: "./assets/icons/board8.svg",
    text: "表示される予測値",
    type: "board",
    group: 3,
  },
  {
    link: "./assets/icons/board9.svg",
    text: "表示される営業タイプ",
    type: "board",
    group: 3,
  },
];

const HandleLeftBar = () => {
  const left_bar = document.querySelector(".left_bar");
  tabs.forEach((tab) => {
    const tab_a = document.createElement("a");
    tab_a.href = tab.link;
    tab_a.className = "tab-btn";
    const tab_p = document.createElement("p");
    tab_p.className = "tab-text";
    tab_p.textContent = tab.title;

    const tab_icon = document.createElement("i");
    tab_icon.className = "fa-solid fa-angle-right tab-icon";

    tab_a.appendChild(tab_p);
    tab_a.appendChild(tab_icon);

    left_bar.appendChild(tab_a);
  });
};

const HandleTopic = (topicId, index) => {
  const topic = document.getElementById(topicId);

  const topic_image = document.createElement("img");
  topic_image.src = topics[index].image;
  topic_image.alt = topics[index].alt;

  const topic_content = document.createElement("div");
  topic_content.classList = "content";

  const topic_content_title = document.createElement("h2");
  topic_content_title.innerText = topics[index].title;
  topic_content_title.classList = "content-title";

  const topic_content_text = document.createElement("p");
  topic_content_text.innerText = topics[index].text;
  topic_content_text.classList = "content-text";

  topic_content.appendChild(topic_content_title);
  topic_content.appendChild(topic_content_text);
  topic.appendChild(topic_image);
  topic.appendChild(topic_content);
};

const HandleHeading = (headingId, index) => {
  const heading = document.getElementById(headingId);

  const headingWrapper = document.createElement("div");
  headingWrapper.classList = "heading-wrapper";

  const headingTitle = document.createElement("h2");
  headingTitle.classList = "heading-title";
  headingTitle.innerText = headings[index].title;

  headingWrapper.appendChild(headingTitle);

  if (index > 2) {
    const headingContent = document.createElement("p");
    headingContent.classList = "heading-content";
    headings[index].content.forEach((element, index) => {
      const span = document.createElement("span");
      span.innerText = element;
      span.style.display = "block";
      if (index >= 1) {
        span.style.marginTop = "16px";
      }
      headingContent.appendChild(span);
    });
    headingWrapper.appendChild(headingContent);
  }

  heading.appendChild(headingWrapper);
};

const HandleItem = (tagListId, type, group) => {
  const tagList = document.getElementById(tagListId);
  const filteredItems = items.filter(
    (item) => item.type === type && item.group === group
  );
  filteredItems.forEach((item, index) => {
    const tag = document.createElement("div");
    if (type === "icon") {
      tag.classList = "tag-1";
    } else if (type === "board") {
      tag.classList = "tag-2";
    }

    const image = document.createElement("img");
    // if (type === "icon") {
    //   image.classList = "tag-image-1";
    // } else if (type === "board") {
    //   image.classList = "tag-image-2";
    // }
    image.src = item.link;
    image.alt = `image ${index + 1} `;

    const text = document.createElement("p");
    if (type === "icon") {
      text.classList = "tag-text-1";
    } else if (type === "board") {
      text.classList = "tag-text-2";
    }
    text.innerText = item.text;
    tag.appendChild(image);
    tag.appendChild(text);
    tagList.appendChild(tag);
  });
};

document.addEventListener("DOMContentLoaded", HandleLeftBar);
document.addEventListener("DOMContentLoaded", HandleTopic("topic1", 0));
document.addEventListener("DOMContentLoaded", HandleTopic("topic2", 1));
document.addEventListener(
  "DOMContentLoaded",
  HandleItem("tag-list-1", "icon", 0)
);

document.addEventListener("DOMContentLoaded", HandleHeading("heading1", 0));
document.addEventListener(
  "DOMContentLoaded",
  HandleItem("tag-list-2", "board", 1)
);
document.addEventListener("DOMContentLoaded", HandleHeading("heading2", 1));
document.addEventListener(
  "DOMContentLoaded",
  HandleItem("tag-list-3", "board", 2)
);
document.addEventListener("DOMContentLoaded", HandleHeading("heading3", 2));
document.addEventListener(
  "DOMContentLoaded",
  HandleItem("tag-list-4", "board", 3)
);
document.addEventListener("DOMContentLoaded", HandleTopic("topic3", 2));

// document.addEventListener("DOMContentLoaded", HandleHeading("heading4", 3));
// document.addEventListener("DOMContentLoaded", HandleHeading("heading5", 4));
// document.addEventListener("DOMContentLoaded", HandleHeading("heading6", 5));
// document.addEventListener("DOMContentLoaded", HandleHeading("heading7", 6));
// document.addEventListener("DOMContentLoaded", HandleHeading("heading8", 7));
// document.addEventListener("DOMContentLoaded", HandleHeading("heading9", 8));

const HandleCatalogue = (catalogueId, index) => {
  const catalogue = document.getElementById(catalogueId);
  for (let i = index; i < headings.length; i++) {
    const heading = document.createElement("div");
    heading.classList="heading-sub"
    heading.id = "heading" + (i + 1);
    console.log(heading.id);
    catalogue.appendChild(heading);
    document.addEventListener("DOMContentLoaded", HandleHeading(heading.id, i));
  }
};

HandleCatalogue("catalogue-id", 3);
