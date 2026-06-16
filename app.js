export const categories = [
  { id: "all", label: "全部", tone: "all" },
  { id: "study", label: "讀書點", tone: "blue" },
  { id: "food", label: "美食雷達", tone: "green" },
  { id: "capsule", label: "時空膠囊", tone: "violet" },
  { id: "mission", label: "限時任務", tone: "amber" },
  { id: "stress", label: "期末崩潰區", tone: "red" }
];

export const sampleLocations = [
  {
    id: "library",
    name: "圖書館",
    theme: "安靜讀書",
    x: 28,
    y: 34,
    signal: "高",
    traffic: "座位緊張",
    bestFor: "考前衝刺、自習、查資料",
    clue: "三樓西側靠窗座位與借還書櫃台附近",
    mapQuery: "台灣 科技大學 校園 圖書館",
    tips: ["先找有插座的位置", "適合發布讀書點與時空膠囊"],
    description: "考前最熱門的讀書與抱怨集中地。",
    mission: "找到三樓靠窗座位，留下今天最想對期末說的一句話。"
  },
  {
    id: "cafeteria",
    name: "學生餐廳",
    theme: "補血補糧",
    x: 58,
    y: 38,
    signal: "中",
    traffic: "午餐尖峰",
    bestFor: "餐點情報、補給、排隊提醒",
    clue: "餐廳出口與自動販賣機附近",
    mapQuery: "台灣 科技大學 校園 學生餐廳",
    tips: ["午餐前先看排隊情報", "適合發布美食與補給資訊"],
    description: "午餐、宵夜、排隊情報都會在這裡爆出來。",
    mission: "拍下今日最值得推薦的一餐，用 20 字內介紹。"
  },
  {
    id: "classroom",
    name: "教學大樓",
    theme: "上課與作業",
    x: 43,
    y: 63,
    signal: "高",
    traffic: "下課後上升",
    bestFor: "作業提醒、分組集合、課堂資訊",
    clue: "402 教室外長桌與公布欄",
    mapQuery: "台灣 科技大學 校園 教學大樓",
    tips: ["適合提醒作業截止", "可以當作小組 Demo 集合點"],
    description: "課堂提醒、作業求救、分組討論的集散地。",
    mission: "留下一個讓同學少踩雷的作業提醒。"
  },
  {
    id: "gym",
    name: "操場",
    theme: "活動與社交",
    x: 77,
    y: 58,
    signal: "中",
    traffic: "傍晚較熱鬧",
    bestFor: "活動集合、散步回血、社團通知",
    clue: "司令台右側與跑道入口",
    mapQuery: "台灣 科技大學 校園 操場",
    tips: ["適合限時任務", "把壓力轉成一圈散步"],
    description: "運動、社團、活動集合前的即時留言牆。",
    mission: "完成一圈散步，留下你的今日能量值。"
  },
  {
    id: "dorm",
    name: "宿舍",
    theme: "夜貓生活",
    x: 72,
    y: 24,
    signal: "中",
    traffic: "夜間活躍",
    bestFor: "夜間求救、泡麵情報、試講邀約",
    clue: "交誼廳白板旁與宿舍出口",
    mapQuery: "台灣 科技大學 校園 宿舍",
    tips: ["適合期末崩潰區", "半夜資訊要短而清楚"],
    description: "半夜趕作業、泡麵情報、室友求救都會出現。",
    mission: "在午夜前寫下一個明天要完成的小任務。"
  },
  {
    id: "garden",
    name: "中庭花園",
    theme: "放空回血",
    x: 19,
    y: 68,
    signal: "低",
    traffic: "午後放鬆",
    bestFor: "匿名鼓勵、放空、時空膠囊",
    clue: "中庭樹下長椅與花圃旁",
    mapQuery: "台灣 科技大學 校園 中庭 花園",
    tips: ["適合寫給未來的自己", "用短句留下情緒價值"],
    description: "適合留給未來自己的時空膠囊與匿名鼓勵。",
    mission: "把今天的壓力寫成一句話，寄給一週後的自己。"
  }
];

export const samplePosts = [
  {
    id: "p-001",
    author: "圖書館角落人",
    handle: "@quiet-seat",
    content: "三樓靠窗區今天有插座，冷氣不會太冷，適合把期末報告一次救回來。",
    locationId: "library",
    category: "study",
    time: "12 分鐘前",
    likes: 42,
    replies: 8,
    reposts: 5,
    clue: "三樓西側靠窗"
  },
  {
    id: "p-002",
    author: "午餐選擇困難",
    handle: "@hungry-thread",
    content: "學生餐廳今天雞腿飯比平常早賣完，想吃的人要 12:20 前衝。",
    locationId: "cafeteria",
    category: "food",
    time: "25 分鐘前",
    likes: 31,
    replies: 13,
    reposts: 2,
    clue: "靠近飲水機那排"
  },
  {
    id: "p-003",
    author: "Deadline 同盟",
    handle: "@final-week",
    content: "教學大樓 402 外面那張長桌目前沒人，可以臨時開小組會議。",
    locationId: "classroom",
    category: "stress",
    time: "36 分鐘前",
    likes: 66,
    replies: 19,
    reposts: 7,
    clue: "402 教室外"
  },
  {
    id: "p-004",
    author: "一週後的我",
    handle: "@capsule-me",
    content: "如果你看到這則，記得你不是不會做，只是今天太累了。先睡，再改。",
    locationId: "garden",
    category: "capsule",
    time: "1 小時前",
    likes: 88,
    replies: 21,
    reposts: 15,
    clue: "中庭樹下長椅"
  },
  {
    id: "p-005",
    author: "夜貓室友",
    handle: "@dorm-owl",
    content: "宿舍交誼廳現在有人在練 Demo，想互相試講的可以來。",
    locationId: "dorm",
    category: "mission",
    time: "1 小時前",
    likes: 24,
    replies: 6,
    reposts: 3,
    clue: "交誼廳白板旁"
  },
  {
    id: "p-006",
    author: "散步回血中",
    handle: "@walk-reset",
    content: "操場一圈大概 6 分鐘，剛好可以把腦袋從 CSS 排版裡撈回來。",
    locationId: "gym",
    category: "mission",
    time: "2 小時前",
    likes: 53,
    replies: 11,
    reposts: 9,
    clue: "司令台右側"
  },
  {
    id: "p-007",
    author: "咖啡因地圖",
    handle: "@caffeine-map",
    content: "餐廳旁自動販賣機咖啡補貨了，期末週限定救命物資。",
    locationId: "cafeteria",
    category: "stress",
    time: "2 小時前",
    likes: 59,
    replies: 14,
    reposts: 4,
    clue: "餐廳出口"
  },
  {
    id: "p-008",
    author: "匿名鼓勵站",
    handle: "@soft-note",
    content: "留給下一個打開地圖的人：你的 Demo 不需要完美，只要清楚展示你做了什麼。",
    locationId: "library",
    category: "capsule",
    time: "3 小時前",
    likes: 77,
    replies: 10,
    reposts: 12,
    clue: "借還書櫃台旁"
  },
  {
    id: "p-009",
    author: "期末讀書會",
    handle: "@study-ring",
    content: "圖書館二樓討論室今晚 7 點後空出來，適合最後一次統整報告流程。",
    locationId: "library",
    category: "study",
    time: "4 小時前",
    likes: 34,
    replies: 7,
    reposts: 6,
    clue: "二樓討論室"
  },
  {
    id: "p-010",
    author: "餐廳雷達",
    handle: "@food-signal",
    content: "學生餐廳靠窗那排比較安靜，適合邊吃邊修投影片。",
    locationId: "cafeteria",
    category: "food",
    time: "4 小時前",
    likes: 27,
    replies: 4,
    reposts: 3,
    clue: "靠窗長桌"
  },
  {
    id: "p-011",
    author: "補給小隊",
    handle: "@supply-run",
    content: "如果 Demo 前太緊張，先去餐廳買水，不要空腹上台。",
    locationId: "cafeteria",
    category: "mission",
    time: "5 小時前",
    likes: 45,
    replies: 9,
    reposts: 5,
    clue: "餐廳飲水機旁"
  },
  {
    id: "p-012",
    author: "前排提醒員",
    handle: "@class-alert",
    content: "教學大樓 402 投影線容易鬆，報告前記得先測螢幕。",
    locationId: "classroom",
    category: "study",
    time: "5 小時前",
    likes: 51,
    replies: 16,
    reposts: 8,
    clue: "402 講台"
  },
  {
    id: "p-013",
    author: "小組救援站",
    handle: "@team-save",
    content: "教學大樓走廊可以快速排練，但聲音不要太大，隔壁還在上課。",
    locationId: "classroom",
    category: "mission",
    time: "6 小時前",
    likes: 39,
    replies: 12,
    reposts: 4,
    clue: "四樓走廊"
  },
  {
    id: "p-014",
    author: "跑道充電器",
    handle: "@move-reset",
    content: "操場傍晚風很舒服，卡關的時候走一圈再回去寫程式真的有用。",
    locationId: "gym",
    category: "stress",
    time: "6 小時前",
    likes: 61,
    replies: 9,
    reposts: 10,
    clue: "跑道入口"
  },
  {
    id: "p-015",
    author: "社團集合點",
    handle: "@club-here",
    content: "操場旁邊今天有活動布置，想拍網站素材可以趁現在。",
    locationId: "gym",
    category: "mission",
    time: "7 小時前",
    likes: 28,
    replies: 5,
    reposts: 7,
    clue: "司令台左側"
  },
  {
    id: "p-016",
    author: "半夜修網頁",
    handle: "@late-build",
    content: "宿舍交誼廳 Wi-Fi 目前穩，適合最後整理程式碼和錄 Demo。",
    locationId: "dorm",
    category: "study",
    time: "7 小時前",
    likes: 43,
    replies: 11,
    reposts: 5,
    clue: "交誼廳插座區"
  },
  {
    id: "p-017",
    author: "泡麵警報",
    handle: "@night-food",
    content: "宿舍販賣機泡麵剩不多，晚點要熬夜的人先補貨。",
    locationId: "dorm",
    category: "food",
    time: "8 小時前",
    likes: 36,
    replies: 8,
    reposts: 4,
    clue: "宿舍出口"
  },
  {
    id: "p-018",
    author: "花園寄信人",
    handle: "@future-note",
    content: "中庭花園適合錄一段給未來自己的音檔，提醒自己期末真的撐過來了。",
    locationId: "garden",
    category: "capsule",
    time: "8 小時前",
    likes: 72,
    replies: 17,
    reposts: 11,
    clue: "花圃旁"
  },
  {
    id: "p-019",
    author: "午后放空",
    handle: "@soft-break",
    content: "中庭花園 3 點後比較安靜，可以在這裡把報告開場白練順。",
    locationId: "garden",
    category: "mission",
    time: "9 小時前",
    likes: 32,
    replies: 6,
    reposts: 3,
    clue: "樹下長椅"
  }
];

const defaultDraft = {
  author: "匿名脆友",
  locationId: "library",
  category: "capsule"
};

export function getLocationById(locations, locationId) {
  return locations.find((location) => location.id === locationId) || locations[0];
}

export function filterPosts(posts, filters = {}) {
  const { locationId = "all", category = "all" } = filters;

  return posts.filter((post) => {
    const locationMatches = locationId === "all" || post.locationId === locationId;
    const categoryMatches = category === "all" || post.category === category;
    return locationMatches && categoryMatches;
  });
}

export function buildGoogleMapsEmbedUrl(query) {
  const url = new URL("https://www.google.com/maps");
  url.searchParams.set("q", String(query || "台灣 科技大學 校園").trim());
  url.searchParams.set("output", "embed");
  return url;
}

export function buildGoogleMapsSearchUrl(query) {
  const url = new URL("https://www.google.com/maps/search/");
  url.searchParams.set("api", "1");
  url.searchParams.set("query", String(query || "台灣 科技大學 校園").trim());
  return url;
}

export function searchPosts(posts, locations, query) {
  const keyword = String(query || "").trim().toLowerCase();
  if (!keyword) return posts;

  return posts.filter((post) => {
    const location = getLocationById(locations, post.locationId);
    const haystack = [
      post.author,
      post.handle,
      post.content,
      post.clue,
      categoryLabel(post.category),
      location.name,
      location.theme,
      location.bestFor,
      location.traffic,
      location.clue
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(keyword);
  });
}

export function normalizeDraft(draft = {}) {
  const author = String(draft.author || defaultDraft.author).trim() || defaultDraft.author;
  const content = String(draft.content || "").trim();
  const locationId = draft.locationId || defaultDraft.locationId;
  const category = draft.category || defaultDraft.category;

  return {
    author,
    content: content || "今天的校園秘密基地，留給下一個脆友。",
    locationId,
    category
  };
}

export function createPost(posts, draft = {}) {
  const normalized = normalizeDraft(draft);
  const newPost = {
    id: `p-user-${Date.now()}`,
    author: normalized.author,
    handle: "@campus-friend",
    content: normalized.content,
    locationId: normalized.locationId,
    category: normalized.category,
    time: "剛剛",
    likes: 0,
    replies: 0,
    reposts: 0,
    clue: "使用者新增"
  };

  return [newPost, ...posts];
}

export function getSpotStats(posts, locations, locationId) {
  const location = getLocationById(locations, locationId);
  const relatedPosts = posts.filter((post) => post.locationId === location.id);
  const popularity = relatedPosts.reduce(
    (total, post) => total + post.likes + post.replies + post.reposts + 1,
    0
  );
  const categoriesFound = Array.from(new Set(relatedPosts.map((post) => post.category)));

  return {
    location,
    postCount: relatedPosts.length,
    popularity,
    categories: categoriesFound,
    topPost: relatedPosts[0] || null
  };
}

export function getHotspotLeaderboard(posts, locations) {
  return locations
    .map((location) => getSpotStats(posts, locations, location.id))
    .sort((left, right) => right.popularity - left.popularity);
}

export function getMoodSummary(posts) {
  const items = categories
    .filter((category) => category.id !== "all")
    .map((category) => ({
      ...category,
      count: posts.filter((post) => post.category === category.id).length
    }));
  const dominant = items.reduce(
    (leader, item) => (item.count > leader.count ? item : leader),
    items[0]
  );

  return {
    items,
    dominant,
    total: posts.length
  };
}

export function getMissionProgress(posts, locations) {
  const completedLocationIds = new Set(
    posts.filter((post) => post.category === "mission").map((post) => post.locationId)
  );
  const completed = locations.filter((location) => completedLocationIds.has(location.id)).length;
  const total = locations.length;

  return {
    completed,
    total,
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
    remaining: Math.max(total - completed, 0)
  };
}

export function buildShareText(post, locations = sampleLocations) {
  const location = getLocationById(locations, post.locationId);
  return `校園脆友尋寶圖｜${location.name}：${post.content}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function categoryLabel(categoryId) {
  return categories.find((category) => category.id === categoryId)?.label || categoryId;
}

function initApp() {
  const refs = {
    categoryFilters: document.querySelector("#categoryFilters"),
    feedList: document.querySelector("#feedList"),
    mapPins: document.querySelector("#mapPins"),
    spotName: document.querySelector("#spotName"),
    spotTheme: document.querySelector("#spotTheme"),
    spotDescription: document.querySelector("#spotDescription"),
    spotMeta: document.querySelector("#spotMeta"),
    missionText: document.querySelector("#missionText"),
    missionProgressBar: document.querySelector("#missionProgressBar"),
    missionProgressText: document.querySelector("#missionProgressText"),
    leaderboardList: document.querySelector("#leaderboardList"),
    capsuleList: document.querySelector("#capsuleList"),
    moodDashboard: document.querySelector("#moodDashboard"),
    locationSelect: document.querySelector("#locationSelect"),
    categorySelect: document.querySelector("#categorySelect"),
    searchInput: document.querySelector("#searchInput"),
    composer: document.querySelector("#composer"),
    authorInput: document.querySelector("#authorInput"),
    contentInput: document.querySelector("#contentInput"),
    selectedLocationText: document.querySelector("#selectedLocationText"),
    feedCount: document.querySelector("#feedCount"),
    spotDetails: document.querySelector("#spotDetails"),
    googleMapFrame: document.querySelector("#googleMapFrame"),
    googleMapLink: document.querySelector("#googleMapLink"),
    googleMapQueryInput: document.querySelector("#googleMapQueryInput"),
    googleMapSearchButton: document.querySelector("#googleMapSearchButton"),
    toast: document.querySelector("#toast")
  };

  const state = {
    posts: [...samplePosts],
    selectedLocation: "all",
    selectedCategory: "all",
    searchQuery: "",
    googleMapQuery: "台灣 科技大學 校園"
  };

  function setToast(message) {
    refs.toast.textContent = message;
    refs.toast.classList.add("is-visible");
    window.setTimeout(() => refs.toast.classList.remove("is-visible"), 2600);
  }

  function renderCategoryFilters() {
    refs.categoryFilters.innerHTML = categories
      .map(
        (category) => `
          <button
            class="chip ${state.selectedCategory === category.id ? "is-active" : ""}"
            type="button"
            data-category="${category.id}"
          >
            ${category.label}
          </button>
        `
      )
      .join("");
  }

  function renderSelectOptions() {
    refs.locationSelect.innerHTML = sampleLocations
      .map((location) => `<option value="${location.id}">${location.name}</option>`)
      .join("");
    refs.categorySelect.innerHTML = categories
      .filter((category) => category.id !== "all")
      .map((category) => `<option value="${category.id}">${category.label}</option>`)
      .join("");
    refs.categorySelect.value = "capsule";
  }

  function renderMapPins() {
    refs.mapPins.innerHTML = sampleLocations
      .map(
        (location) => `
          <button
            class="map-pin ${state.selectedLocation === location.id ? "is-active" : ""}"
            type="button"
            style="left: ${location.x}%; top: ${location.y}%"
            data-location="${location.id}"
            aria-label="查看${location.name}的脆文"
          >
            <span class="pin-dot"></span>
            <span class="pin-label">${location.name}</span>
          </button>
        `
      )
      .join("");
  }

  function renderSpotPanel() {
    const targetId = state.selectedLocation === "all" ? "library" : state.selectedLocation;
    const stats = getSpotStats(state.posts, sampleLocations, targetId);
    refs.spotName.textContent = stats.location.name;
    refs.spotTheme.textContent = stats.location.theme;
    refs.spotDescription.textContent = stats.location.description;
    refs.spotMeta.innerHTML = `
      <span>${stats.postCount} 則脆文</span>
      <span>人氣 ${stats.popularity}</span>
      <span>訊號 ${stats.location.signal}</span>
      <span>${escapeHtml(stats.location.traffic)}</span>
    `;
    refs.spotDetails.innerHTML = `
      <dl>
        <div>
          <dt>適合情境</dt>
          <dd>${escapeHtml(stats.location.bestFor)}</dd>
        </div>
        <div>
          <dt>尋寶線索</dt>
          <dd>${escapeHtml(stats.location.clue)}</dd>
        </div>
      </dl>
      <ul>
        ${stats.location.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}
      </ul>
    `;
    refs.missionText.textContent = stats.location.mission;
    refs.selectedLocationText.textContent =
      state.selectedLocation === "all"
        ? state.searchQuery
          ? `搜尋「${state.searchQuery}」`
          : "全校探索中"
        : `${stats.location.name} 熱點`;
  }

  function renderFeed() {
    const filteredPosts = filterPosts(state.posts, {
      locationId: state.selectedLocation,
      category: state.selectedCategory
    });
    const posts = searchPosts(filteredPosts, sampleLocations, state.searchQuery);

    refs.feedCount.textContent = `${posts.length} 則`;
    refs.feedList.innerHTML = posts.length
      ? posts
          .map((post) => {
            const location = getLocationById(sampleLocations, post.locationId);
            return `
              <article class="post-card">
                <div class="avatar" aria-hidden="true">${escapeHtml(post.author.slice(0, 1))}</div>
                <div class="post-body">
                  <header class="post-header">
                    <div>
                      <strong>${escapeHtml(post.author)}</strong>
                      <span>${escapeHtml(post.handle)}</span>
                    </div>
                    <time>${escapeHtml(post.time)}</time>
                  </header>
                  <p>${escapeHtml(post.content)}</p>
                  <div class="post-tags">
                    <span>${escapeHtml(location.name)}</span>
                    <span>${escapeHtml(categoryLabel(post.category))}</span>
                    <span>${escapeHtml(post.clue)}</span>
                  </div>
                  <div class="post-actions" aria-label="貼文互動統計">
                    <span>回覆 ${post.replies}</span>
                    <span>轉脆 ${post.reposts}</span>
                    <span>喜歡 ${post.likes}</span>
                  </div>
                </div>
              </article>
            `;
          })
          .join("")
      : `
        <div class="empty-state">
          <strong>沒有找到符合條件的脆文</strong>
          <p>可以清除搜尋、切回全部分類，或直接新增一則校園脆文。</p>
        </div>
      `;
  }

  function renderCapsules() {
    const capsulePosts = filterPosts(state.posts, { category: "capsule" }).slice(0, 3);
    refs.capsuleList.innerHTML = capsulePosts
      .map((post) => {
        const location = getLocationById(sampleLocations, post.locationId);
        return `
          <li>
            <span>${escapeHtml(location.name)}</span>
            <p>${escapeHtml(post.content)}</p>
          </li>
        `;
      })
      .join("");
  }

  function renderMoodDashboard() {
    const summary = getMoodSummary(state.posts);
    refs.moodDashboard.innerHTML = `
      <div class="mood-total">
        <strong>${summary.total}</strong>
        <span>則校園脆文</span>
      </div>
      ${summary.items
        .map((item) => {
          const width = summary.total === 0 ? 0 : Math.round((item.count / summary.total) * 100);
          return `
            <div class="mood-row">
              <span>${escapeHtml(item.label)}</span>
              <div class="mini-bar"><i style="width: ${width}%"></i></div>
              <strong>${item.count}</strong>
            </div>
          `;
        })
        .join("")}
      <p>今日主情緒：${escapeHtml(summary.dominant.label)}</p>
    `;
  }

  function renderMissionProgress() {
    const progress = getMissionProgress(state.posts, sampleLocations);
    refs.missionProgressBar.style.width = `${progress.percentage}%`;
    refs.missionProgressText.textContent = `${progress.completed} / ${progress.total}`;
  }

  function renderLeaderboard() {
    const rows = getHotspotLeaderboard(state.posts, sampleLocations);
    refs.leaderboardList.innerHTML = rows
      .map(
        (row, index) => `
          <button
            class="leaderboard-row ${state.selectedLocation === row.location.id ? "is-active" : ""}"
            type="button"
            data-location="${row.location.id}"
          >
            <span>${index + 1}</span>
            <strong>${escapeHtml(row.location.name)}</strong>
            <em>${row.postCount} 則 / 人氣 ${row.popularity}</em>
          </button>
        `
      )
      .join("");
  }

  function renderGoogleMap() {
    refs.googleMapQueryInput.value = state.googleMapQuery;
    refs.googleMapFrame.src = buildGoogleMapsEmbedUrl(state.googleMapQuery).href;
    refs.googleMapLink.href = buildGoogleMapsSearchUrl(state.googleMapQuery).href;
  }

  function render() {
    renderCategoryFilters();
    renderMapPins();
    renderSpotPanel();
    renderFeed();
    renderCapsules();
    renderMoodDashboard();
    renderMissionProgress();
    renderLeaderboard();
    renderGoogleMap();
  }

  refs.categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.selectedCategory = button.dataset.category;
    render();
  });

  refs.mapPins.addEventListener("click", (event) => {
    const button = event.target.closest("[data-location]");
    if (!button) return;
    state.selectedLocation = button.dataset.location;
    state.googleMapQuery = getLocationById(sampleLocations, state.selectedLocation).mapQuery;
    refs.locationSelect.value = state.selectedLocation;
    render();
  });

  refs.leaderboardList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-location]");
    if (!button) return;
    state.selectedLocation = button.dataset.location;
    state.googleMapQuery = getLocationById(sampleLocations, state.selectedLocation).mapQuery;
    refs.locationSelect.value = state.selectedLocation;
    render();
  });

  refs.searchInput.addEventListener("input", () => {
    state.searchQuery = refs.searchInput.value.trim();
    renderFeed();
    renderSpotPanel();
  });

  refs.googleMapSearchButton.addEventListener("click", () => {
    state.googleMapQuery = refs.googleMapQueryInput.value.trim() || "台灣 科技大學 校園";
    renderGoogleMap();
    setToast("Google Maps 參考區已更新。");
  });

  document.querySelector("#showAllButton").addEventListener("click", () => {
    state.selectedLocation = "all";
    state.selectedCategory = "all";
    state.searchQuery = "";
    state.googleMapQuery = "台灣 科技大學 校園";
    refs.searchInput.value = "";
    render();
  });

  refs.composer.addEventListener("submit", (event) => {
    event.preventDefault();
    const draft = normalizeDraft({
      author: refs.authorInput.value,
      content: refs.contentInput.value,
      locationId: refs.locationSelect.value,
      category: refs.categorySelect.value
    });

    if (!draft.content) {
      setToast("請先輸入想留下的脆文。");
      return;
    }

    state.posts = createPost(state.posts, draft);
    state.selectedLocation = draft.locationId;
    state.selectedCategory = draft.category;
    state.searchQuery = "";
    state.googleMapQuery = getLocationById(sampleLocations, draft.locationId).mapQuery;
    refs.contentInput.value = "";
    refs.searchInput.value = "";
    render();
    setToast("已新增一則校園脆文，可以在地圖熱點看到它。");
  });

  renderSelectOptions();
  render();
}

if (typeof document !== "undefined") {
  window.addEventListener("DOMContentLoaded", initApp);
}
