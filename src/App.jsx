import { useState, useRef, useEffect } from "react";

// =====================================================
// DARK MODE CONTEXT
// =====================================================
const useDark = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("dark") === "1");
  const toggle = () => setDark(d => { localStorage.setItem("dark", d ? "0" : "1"); return !d; });
  return [dark, toggle];
};

// =====================================================
// THEME TOKENS
// =====================================================
const theme = (dark) => ({
  bg: dark ? "#0F0F1A" : "#F7F8FA",
  card: dark ? "#1A1A2E" : "#FFFFFF",
  card2: dark ? "#22223A" : "#F7F8FA",
  text: dark ? "#F0F0FF" : "#1A1A2E",
  sub: dark ? "#8888AA" : "#888888",
  border: dark ? "#2A2A4A" : "#EBEBEB",
  accent: "#E63946",
  accentDark: "#C1121F",
});



// =====================================================
// TRANSLATIONS
// =====================================================
const t = {
  uz: {
    appName:"Chegirma.uz", welcome:"Xush kelibsiz", enterName:"Ism", enterSurname:"Familiya",
    enterPhone:"Telefon raqam", next:"Davom etish", confirm:"Tasdiqlash", smsCode:"SMS kod",
    smsHint:"Raqamingizga 4 xonali kod yuborildi", resend:"Qayta yuborish",
    addPhoto:"Profil rasmi qo'shish", skip:"O'tkazib yuborish",
    allowNotif:"Bildirishnomalarni yoqing", notifDesc:"Yangi chegirmalardan xabardor bo'ling",
    enable:"Yoqish", greeting:"Xush kelibsiz 👋", search:"Do'kon yoki chegirma qidirish...",
    all:"Hammasi", food:"Oziq-ovqat", clothing:"Kiyim-kechak", electronics:"Elektronika",
    beauty:"Go'zallik", restaurant:"Restoran/Kafe", home_cat:"Uy-ro'zg'or", sport:"Sport",
    services:"Xizmatlar", offers:"Takliflar", left:"qoldi", home:"Bosh sahifa",
    saved:"Saqlanganlar", cart:"Savat", map:"Xarita", profile:"Profil",
    savedTitle:"❤️ Saqlanganlar", nothingSaved:"Hech narsa saqlanmagan",
    nothingSavedDesc:"Yoqgan chegirmalarni saqlang", noDeals:"Chegirma topilmadi",
    noDealsDesc:"Boshqa kalit so'z sinab ko'ring", nearby:"Yaqin atrofdagi chegirmali joylar",
    myCoupons:"Mening kuponlarim", notifications:"Bildirishnomalar", settings:"Sozlamalar",
    discount:"CHEGIRMA", expires:"Muddati", namePlaceholder:"Isming",
    surnamePlaceholder:"Familiyangiz", phonePlaceholder:"+998 90 123 45 67",
    addListing:"Mahsulot qo'shish", addListingSub:"Do'koningizga yangi mahsulot qo'shing",
    step:"Qadam", of:"/", chooseCategory:"Kategoriyani tanlang",
    chooseCategoryDesc:"Mahsulot qaysi yo'nalishga tegishli?", productInfo:"Mahsulot ma'lumotlari",
    productName:"Mahsulot / xizmat nomi", productNamePh:"Masalan: Erkaklar krossovkasi",
    productDesc:"Tavsif", productDescPh:"Mahsulot haqida qisqacha ma'lumot bering...",
    parameters:"Parametrlar (ixtiyoriy)", parametersDesc:"O'lcham, rang, model va h.k.",
    paramNamePh:"Masalan: Rang", paramValuePh:"Masalan: Qora", addParam:"+ Parametr qo'shish",
    priceInfo:"Narx", originalPrice:"Narxi (so'm)", locationInfo:"Joylashuv va aloqa",
    storeAddress:"Manzil", storeAddressPh:"Masalan: Chilonzor tumani, 5-mavze",
    pickOnMap:"Xaritadan aniq joyni belgilang", pickOnMapHint:"Manzilni aniq belgilash uchun xaritaga bosing",
    locationSet:"Joylashuv belgilandi ✓", phone:"Telefon raqami (ixtiyoriy)",
    photos:"Mahsulot rasmlari", photosDesc:"Kamida 1 ta rasm yuklang", back:"Orqaga",
    submitListing:"Do'konga qo'shish", fillRequired:"Iltimos barcha majburiy maydonlarni to'ldiring",
    required:"*", sumShort:"so'm", myStore:"Mening do'konim", createStore:"Do'kon yaratish",
    createStoreSub:"Chegirma joylash uchun avval do'koningizni yarating",
    storeName:"Do'kon nomi", storeNamePh:"Masalan: Aziz Market", storeLogo:"Do'kon belgisi (emoji)",
    createStoreBtn:"Do'kon yaratish", productsInStore:"Mahsulotlar",
    noProductsInStore:"Hozircha mahsulot yo'q", noProductsInStoreDesc:"Birinchi mahsulotingizni qo'shing",
    addProductBtn:"+ Mahsulot qo'shish", makeDiscount:"🏷️ Chegirma qilish",
    editDiscount:"Chegirmani tahrirlash", removeDiscount:"Chegirmani bekor qilish",
    discountModalTitle:"Chegirma qo'yish", discountPercent:"Chegirma foizi (%)",
    expiryDate:"Chegirma muddati", applyDiscount:"Chegirmaga chiqarish",
    subscribe:"🔔 Obuna bo'lish", subscribed:"✓ Obuna bo'lingan", subscribers:"obunachi",
    goToStore:"🏬 Do'konga o'tish", ownStoreBadge:"Sizning do'koningiz",
    storeReviews:"Sharhlar", noReviews:"Hozircha sharhlar yo'q", leaveReview:"Fikr bildirish",
    commentPh:"Fikringizni yozing (ixtiyoriy)...", submitReview:"Yuborish",
    cancel:"Bekor qilish", rateProduct:"Mahsulotni baholash", deleteProduct:"O'chirish",
    confirmDelete:"Ushbu mahsulotni o'chirishni xohlaysizmi?", yes:"Ha", no:"Yo'q",
    addToCart:"🛒 Savatga qo'shish", inCart:"Savatda", emptyCart:"Savat bo'sh",
    emptyCartDesc:"Chegirmali mahsulotlarni savatga qo'shing", cartTitle:"🛒 Savat",
    qty:"Soni", total:"Jami", removeFromCart:"O'chirish",
    notificationsTitle:"🔔 Bildirishnomalar", noNotifications:"Hozircha bildirishnoma yo'q",
    noNotificationsDesc:"Do'konlarga obuna bo'ling va yangiliklardan xabardor bo'ling",
    newDiscountNotif:(s)=>`${s} yangi chegirma qo'shdi`, newProductNotif:(s)=>`${s} yangi mahsulot qo'shdi`,
    sortBy:"Saralash", sortDefault:"Standart", sortDiscount:"Chegirma %",
    sortPrice:"Narx", sortExpiry:"Muddat", filterTitle:"Filter",
    darkMode:"Tungi rejim", guestMode:"Mehmon sifatida kirish",
    couponTitle:"Mening kuponim", couponUsed:"Ishlatilgan", couponActive:"Faol",
    useCoupon:"Kuponni ishlatish", couponHint:"Do'konda shu kodni ko'rsating",
    statsTitle:"Do'kon statistikasi", statsViews:"Ko'rishlar", statsCoupons:"Kuponlar",
    statsSubscribers:"Obunchilar", statsRevenue:"Taxminiy daromad",
    deliveryAvail:"Yetkazib berish mavjud", deliveryPrice:"Yetkazib berish narxi",
    deliverySom:"so'm", payTitle:"To'lov usuli", payPayme:"Payme",
    payClick:"Click", payUzum:"Uzum Pay", payCash:"Naqd pul",
    payNow:"To'lovni amalga oshirish", orderSuccess:"Buyurtma qabul qilindi! 🎉",
    orderSuccessDesc:"Tez orada siz bilan bog'lanamiz",
    checkout:"Buyurtma berish", subscribedStores:"Obuna bo'lgan do'konlar",
    noSubscribed:"Hech qaysi do'konga obuna bo'lmagansiz",
  },
  ru: {
    appName:"Chegirma.uz", welcome:"Добро пожаловать", enterName:"Имя", enterSurname:"Фамилия",
    enterPhone:"Номер телефона", next:"Продолжить", confirm:"Подтвердить", smsCode:"SMS код",
    smsHint:"На ваш номер отправлен 4-значный код", resend:"Отправить снова",
    addPhoto:"Добавить фото профиля", skip:"Пропустить",
    allowNotif:"Включите уведомления", notifDesc:"Узнавайте о новых скидках первыми",
    enable:"Включить", greeting:"Добро пожаловать 👋", search:"Поиск магазина или скидки...",
    all:"Все", food:"Продукты", clothing:"Одежда", electronics:"Электроника",
    beauty:"Красота", restaurant:"Рестораны/Кафе", home_cat:"Дом и быт", sport:"Спорт",
    services:"Услуги", offers:"Предложения", left:"осталось", home:"Главная",
    saved:"Сохранённые", cart:"Корзина", map:"Карта", profile:"Профиль",
    savedTitle:"❤️ Сохранённые", nothingSaved:"Ничего не сохранено",
    nothingSavedDesc:"Сохраняйте понравившиеся скидки", noDeals:"Скидок не найдено",
    noDealsDesc:"Попробуйте другой запрос", nearby:"Ближайшие места со скидками",
    myCoupons:"Мои купоны", notifications:"Уведомления", settings:"Настройки",
    discount:"СКИДКА", expires:"Срок", namePlaceholder:"Ваше имя",
    surnamePlaceholder:"Ваша фамилия", phonePlaceholder:"+998 90 123 45 67",
    addListing:"Добавить товар", addListingSub:"Добавьте новый товар в свой магазин",
    step:"Шаг", of:"/", chooseCategory:"Выберите категорию",
    chooseCategoryDesc:"К какому направлению относится товар?", productInfo:"Информация о товаре",
    productName:"Название товара / услуги", productNamePh:"Например: Мужские кроссовки",
    productDesc:"Описание", productDescPh:"Краткая информация о товаре...",
    parameters:"Параметры (необязательно)", parametersDesc:"Размер, цвет, модель и т.д.",
    paramNamePh:"Например: Цвет", paramValuePh:"Например: Чёрный", addParam:"+ Добавить параметр",
    priceInfo:"Цена", originalPrice:"Цена (сум)", locationInfo:"Местоположение и контакты",
    storeAddress:"Адрес", storeAddressPh:"Например: Чиланзарский район, 5 квартал",
    pickOnMap:"Отметьте точное место на карте", pickOnMapHint:"Нажмите на карту чтобы указать адрес",
    locationSet:"Местоположение указано ✓", phone:"Номер телефона (необязательно)",
    photos:"Фотографии товара", photosDesc:"Загрузите минимум 1 фото", back:"Назад",
    submitListing:"Добавить в магазин", fillRequired:"Пожалуйста, заполните все обязательные поля",
    required:"*", sumShort:"сум", myStore:"Мой магазин", createStore:"Создать магазин",
    createStoreSub:"Чтобы публиковать скидки, сначала создайте свой магазин",
    storeName:"Название магазина", storeNamePh:"Например: Aziz Market", storeLogo:"Значок магазина (эмодзи)",
    createStoreBtn:"Создать магазин", productsInStore:"Товары",
    noProductsInStore:"Пока нет товаров", noProductsInStoreDesc:"Добавьте свой первый товар",
    addProductBtn:"+ Добавить товар", makeDiscount:"🏷️ Сделать скидку",
    editDiscount:"Изменить скидку", removeDiscount:"Отменить скидку",
    discountModalTitle:"Установить скидку", discountPercent:"Процент скидки (%)",
    expiryDate:"Срок действия скидки", applyDiscount:"Опубликовать скидку",
    subscribe:"🔔 Подписаться", subscribed:"✓ Вы подписаны", subscribers:"подписчиков",
    goToStore:"🏬 Перейти в магазин", ownStoreBadge:"Ваш магазин",
    storeReviews:"Отзывы", noReviews:"Пока нет отзывов", leaveReview:"Оставить отзыв",
    commentPh:"Напишите отзыв (необязательно)...", submitReview:"Отправить",
    cancel:"Отмена", rateProduct:"Оценить товар", deleteProduct:"Удалить",
    confirmDelete:"Удалить этот товар?", yes:"Да", no:"Нет",
    addToCart:"🛒 В корзину", inCart:"В корзине", emptyCart:"Корзина пуста",
    emptyCartDesc:"Добавьте товары со скидкой в корзину", cartTitle:"🛒 Корзина",
    qty:"Кол-во", total:"Итого", removeFromCart:"Удалить",
    notificationsTitle:"🔔 Уведомления", noNotifications:"Пока нет уведомлений",
    noNotificationsDesc:"Подпишитесь на магазины, чтобы узнавать новости первыми",
    newDiscountNotif:(s)=>`${s} опубликовал новую скидку`, newProductNotif:(s)=>`${s} добавил новый товар`,
    sortBy:"Сортировка", sortDefault:"По умолчанию", sortDiscount:"По скидке %",
    sortPrice:"По цене", sortExpiry:"По сроку", filterTitle:"Фильтр",
    darkMode:"Тёмный режим", guestMode:"Войти как гость",
    couponTitle:"Мой купон", couponUsed:"Использован", couponActive:"Активен",
    useCoupon:"Использовать купон", couponHint:"Покажите этот код в магазине",
    statsTitle:"Статистика магазина", statsViews:"Просмотры", statsCoupons:"Купоны",
    statsSubscribers:"Подписчики", statsRevenue:"Примерный доход",
    deliveryAvail:"Доставка доступна", deliveryPrice:"Стоимость доставки",
    deliverySom:"сум", payTitle:"Способ оплаты", payPayme:"Payme",
    payClick:"Click", payUzum:"Uzum Pay", payCash:"Наличные",
    payNow:"Оплатить", orderSuccess:"Заказ принят! 🎉",
    orderSuccessDesc:"Мы свяжемся с вами в ближайшее время",
    checkout:"Оформить заказ", subscribedStores:"Подписки",
    noSubscribed:"Вы не подписаны ни на один магазин",
  },
};


// =====================================================
// CATEGORIES & HELPERS
// =====================================================
const CATEGORY_LIST = [
  { id:"food", emoji:"🍕", color:"#E17055" },
  { id:"clothing", emoji:"👕", color:"#2D3436" },
  { id:"electronics", emoji:"📱", color:"#0984E3" },
  { id:"beauty", emoji:"💄", color:"#E84393" },
  { id:"restaurant", emoji:"☕", color:"#FDCB6E" },
  { id:"home_cat", emoji:"🏠", color:"#00B894" },
  { id:"sport", emoji:"⚽", color:"#6C5CE7" },
  { id:"services", emoji:"🛠️", color:"#636E72" },
];
const categoryLabel = (id, lang) => t[lang][id] || id;
const browseCategories = (lang) => [
  { id:"all", label:t[lang].all, emoji:"🏷️" },
  ...CATEGORY_LIST.map(c => ({ id:c.id, label:categoryLabel(c.id,lang), emoji:c.emoji })),
];
const listingCategories = (lang) => CATEGORY_LIST.map(c => ({ ...c, label:categoryLabel(c.id,lang) }));

const isoDaysFromNow = (n) => {
  const d = new Date(); d.setDate(d.getDate() + n);
  return d.toISOString().slice(0,10);
};
const daysLeftLabel = (dateStr, lang) => {
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.ceil((new Date(dateStr) - today) / 86400000);
  if (diff <= 0) return lang==="uz" ? "Bugun" : "Сегодня";
  return lang==="uz" ? `${diff} kun` : `${diff} дней`;
};
const isExpired = (dateStr) => { const t2=new Date(); t2.setHours(0,0,0,0); return new Date(dateStr)<t2; };
const formatPrice = (n) => Math.round(Number(n)||0).toLocaleString("ru-RU").replace(/,/g," ");
const avgRating = (reviews) => reviews?.length ? reviews.reduce((s,r)=>s+r.stars,0)/reviews.length : 0;

const generateCouponCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i=0; i<8; i++) code += chars[Math.floor(Math.random()*chars.length)];
  return code.slice(0,4)+"-"+code.slice(4);
};

// =====================================================
// DEMO STORES
// =====================================================
const initialStores = [
  { id:"st1", name:"Korzinka", logo:"🛒", color:"#FF6B35", address:"Toshkent, Chilonzor tumani",
    phone:"+998 71 200 00 01", lat:41.299, lng:69.240, views:1240, subscriberBase:320,
    reviews:[{stars:5,comment:"Juda yaxshi narxlar",author:"Anvar"}],
    products:[{ id:"p1", category:"food", name:{uz:"Mahsulotlarga chegirma",ru:"Скидка на продукты"},
      description:{uz:"Barcha oziq-ovqat mahsulotlariga chegirma",ru:"Скидка на все продукты питания"},
      params:[], originalPrice:45000, photos:[], delivery:true, deliveryPrice:5000,
      discount:{percent:30,expiryDate:isoDaysFromNow(2)}, reviews:[{stars:4,comment:"Yaxshi sifat",author:"Dilnoza"}] }] },
  { id:"st2", name:"Zara Tashkent", logo:"👔", color:"#2D3436", address:"Toshkent, Amir Temur ko'chasi",
    phone:"+998 71 200 00 02", lat:41.302, lng:69.245, views:890, subscriberBase:210,
    reviews:[],
    products:[{ id:"p2", category:"clothing", name:{uz:"Yozgi kolleksiya",ru:"Летняя коллекция"},
      description:{uz:"Yangi yozgi kiyimlar kolleksiyasi",ru:"Новая летняя коллекция одежды"},
      params:[{name:"Razmer",value:"S-XL"}], originalPrice:320000, photos:[], delivery:false, deliveryPrice:0,
      discount:{percent:50,expiryDate:isoDaysFromNow(5)}, reviews:[] }] },
  { id:"st3", name:"Texnomart", logo:"📱", color:"#0984E3", address:"Toshkent, Yunusobod tumani",
    phone:"+998 71 200 00 03", lat:41.295, lng:69.235, views:2100, subscriberBase:540,
    reviews:[{stars:5,comment:"Tez yetkazib berishadi",author:"Jasur"}],
    products:[
      { id:"p3", category:"electronics", name:{uz:"Smartfonlarga",ru:"На смартфоны"},
        description:{uz:"Eng so'nggi smartfon modellariga chegirma",ru:"Скидка на новейшие модели смартфонов"},
        params:[], originalPrice:4500000, photos:[], delivery:true, deliveryPrice:15000,
        discount:{percent:15,expiryDate:isoDaysFromNow(3)}, reviews:[] },
      { id:"p3b", category:"electronics", name:{uz:"Elektronika bo'limi",ru:"Отдел электроники"},
        description:{uz:"",ru:""}, params:[], originalPrice:1200000, photos:[], delivery:true, deliveryPrice:10000,
        discount:{percent:40,expiryDate:isoDaysFromNow(4)}, reviews:[] }] },
  { id:"st4", name:"L'Oreal", logo:"💄", color:"#E84393", address:"Toshkent, Mirzo Ulug'bek tumani",
    phone:"+998 71 200 00 04", lat:41.305, lng:69.250, views:670, subscriberBase:180,
    reviews:[],
    products:[{ id:"p4", category:"beauty", name:{uz:"Barcha mahsulotlar",ru:"Все товары"},
      description:{uz:"Go'zallik mahsulotlariga maxsus chegirma",ru:"Специальная скидка на товары для красоты"},
      params:[], originalPrice:180000, photos:[], delivery:true, deliveryPrice:8000,
      discount:{percent:25,expiryDate:isoDaysFromNow(7)}, reviews:[] }] },
  { id:"st5", name:"Dono Pizza", logo:"🍕", color:"#E17055", address:"Toshkent, Shayxontohur tumani",
    phone:"+998 71 200 00 05", lat:41.298, lng:69.242, views:1560, subscriberBase:430,
    reviews:[{stars:4,comment:"Mazali pizza!",author:"Olim"}],
    products:[{ id:"p5", category:"restaurant", name:{uz:"Katta pizza",ru:"Большая пицца"},
      description:{uz:"Katta o'lchamdagi har qanday pizza",ru:"Большая пицца любого вида"},
      params:[], originalPrice:95000, photos:[], delivery:true, deliveryPrice:5000,
      discount:{percent:20,expiryDate:isoDaysFromNow(1)}, reviews:[] }] },
  { id:"st6", name:"Silk Road", logo:"🧥", color:"#00B894", address:"Toshkent, Yakkasaroy tumani",
    phone:"+998 71 200 00 06", lat:41.308, lng:69.248, views:340, subscriberBase:90,
    reviews:[],
    products:[{ id:"p6", category:"clothing", name:{uz:"Atlas ko'ylaklar",ru:"Атласные платья"},
      description:{uz:"",ru:""}, params:[], originalPrice:410000, photos:[], delivery:false, deliveryPrice:0,
      discount:{percent:35,expiryDate:isoDaysFromNow(4)}, reviews:[] }] },
  { id:"st7", name:"Coffee House", logo:"☕", color:"#FDCB6E", address:"Toshkent, Mirobod tumani",
    phone:"+998 71 200 00 07", lat:41.301, lng:69.243, views:780, subscriberBase:200,
    reviews:[],
    products:[{ id:"p7", category:"restaurant", name:{uz:"Barcha ichimliklar",ru:"Все напитки"},
      description:{uz:"",ru:""}, params:[], originalPrice:28000, photos:[], delivery:false, deliveryPrice:0,
      discount:{percent:10,expiryDate:isoDaysFromNow(2)}, reviews:[] }] },
];


// =====================================================
// MAP HELPERS
// =====================================================
const MAP_BOUNDS = { minLat:41.290, maxLat:41.312, minLng:69.230, maxLng:69.255 };
const toX = (lng) => ((lng-MAP_BOUNDS.minLng)/(MAP_BOUNDS.maxLng-MAP_BOUNDS.minLng))*340+20;
const toY = (lat) => ((MAP_BOUNDS.maxLat-lat)/(MAP_BOUNDS.maxLat-MAP_BOUNDS.minLat))*280+20;
const fromXY = (px,py) => ({
  lng:((px-20)/340)*(MAP_BOUNDS.maxLng-MAP_BOUNDS.minLng)+MAP_BOUNDS.minLng,
  lat:MAP_BOUNDS.maxLat-((py-20)/280)*(MAP_BOUNDS.maxLat-MAP_BOUNDS.minLat),
});

function MapBackground() {
  return (<>
    <rect width="380" height="320" fill="#E8F5E8"/>
    <line x1="0" y1="160" x2="380" y2="160" stroke="#fff" strokeWidth="8" opacity="0.7"/>
    <line x1="190" y1="0" x2="190" y2="320" stroke="#fff" strokeWidth="8" opacity="0.7"/>
    <line x1="0" y1="100" x2="380" y2="220" stroke="#fff" strokeWidth="5" opacity="0.5"/>
    <line x1="0" y1="220" x2="380" y2="100" stroke="#fff" strokeWidth="5" opacity="0.5"/>
    {[[40,40,80,60],[160,30,100,50],[280,50,70,60],[50,130,70,50],[230,120,90,40],[310,130,50,60],[40,210,80,60],[150,200,100,50],[280,210,70,60]].map(([x,y,w,h],i)=>(
      <rect key={i} x={x} y={y} width={w} height={h} rx={4} fill="#D4EDDA" opacity="0.8"/>
    ))}
    <ellipse cx="190" cy="160" rx="35" ry="28" fill="#A8D5A2" opacity="0.6"/>
    <text x="190" y="164" textAnchor="middle" fontSize="16">🌳</text>
  </>);
}

// =====================================================
// SHARED UI COMPONENTS
// =====================================================
function StarRating({ value, onChange, size=22, readOnly=false }) {
  const [hover, setHover] = useState(0);
  const display = hover||value;
  return (
    <div style={{display:"flex",gap:4}}>
      {[1,2,3,4,5].map(n=>(
        <span key={n}
          onClick={()=>!readOnly&&onChange&&onChange(n)}
          onMouseEnter={()=>!readOnly&&setHover(n)}
          onMouseLeave={()=>!readOnly&&setHover(0)}
          style={{fontSize:size,cursor:readOnly?"default":"pointer",color:n<=display?"#FFB400":"#E0E0E0",lineHeight:1}}
        >★</span>
      ))}
    </div>
  );
}

function ModalSheet({ onClose, children, maxHeight="85vh", dark }) {
  const th = theme(dark);
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:300,display:"flex",
      alignItems:"flex-end",justifyContent:"center",maxWidth:430,margin:"0 auto"}} onClick={onClose}>
      <div style={{background:th.card,borderRadius:"24px 24px 0 0",padding:24,width:"100%",
        maxWidth:430,maxHeight,overflowY:"auto",boxSizing:"border-box"}} onClick={e=>e.stopPropagation()}>
        <div style={{width:40,height:4,background:th.border,borderRadius:2,margin:"0 auto 18px"}}/>
        {children}
      </div>
    </div>
  );
}

// =====================================================
// QR COUPON DISPLAY
// =====================================================
function QRCode({ code, color="#E63946" }) {
  const size = 120;
  const cells = 10;
  const cell = size/cells;
  const hash = (s) => s.split("").reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0),0);
  const filled = (r,c) => (Math.abs(hash(code+r+c)) % 3) !== 0;
  return (
    <svg width={size} height={size} style={{borderRadius:8,background:"#fff",padding:6}}>
      {Array.from({length:cells}).map((_,r)=>
        Array.from({length:cells}).map((_,c)=>
          filled(r,c) && <rect key={r+"-"+c} x={c*cell} y={r*cell} width={cell} height={cell} fill={color}/>
        )
      )}
    </svg>
  );
}

// =====================================================
// CONFETTI ANIMATION
// =====================================================
function Confetti({ active }) {
  if (!active) return null;
  const colors = ["#E63946","#FFB400","#00B894","#0984E3","#E84393","#6C5CE7"];
  return (
    <div style={{position:"fixed",inset:0,zIndex:9999,pointerEvents:"none",overflow:"hidden"}}>
      {Array.from({length:30}).map((_,i)=>{
        const left = Math.random()*100;
        const delay = Math.random()*0.5;
        const dur = 1+Math.random();
        const color = colors[i%colors.length];
        return (
          <div key={i} style={{
            position:"absolute",top:"-20px",left:`${left}%`,
            width:8,height:8,borderRadius:"50%",background:color,
            animation:`fall ${dur}s ${delay}s ease-in forwards`,
          }}/>
        );
      })}
      <style>{`@keyframes fall{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}`}</style>
    </div>
  );
}

// =====================================================
// SORT & FILTER BAR
// =====================================================
function SortFilterBar({ lang, sort, setSort, dark }) {
  const th = theme(dark);
  const tx = t[lang];
  const options = [
    {id:"default",label:tx.sortDefault},
    {id:"discount",label:tx.sortDiscount+" ↓"},
    {id:"price_asc",label:tx.sortPrice+" ↑"},
    {id:"price_desc",label:tx.sortPrice+" ↓"},
    {id:"expiry",label:tx.sortExpiry},
  ];
  return (
    <div style={{padding:"8px 0 0 20px",display:"flex",gap:8,overflowX:"auto",scrollbarWidth:"none"}}>
      {options.map(o=>(
        <button key={o.id} onClick={()=>setSort(o.id)} style={{
          flexShrink:0,padding:"6px 14px",borderRadius:50,border:"none",cursor:"pointer",
          fontSize:12,fontWeight:600,
          background:sort===o.id?"#E63946":th.card,
          color:sort===o.id?"#fff":th.sub,
          boxShadow:"0 1px 4px rgba(0,0,0,0.08)",
        }}>{o.label}</button>
      ))}
      <div style={{width:16,flexShrink:0}}/>
    </div>
  );
}


// =====================================================
// MAP VIEW
// =====================================================
function MapView({ lang, deals, onDealClick, dark }) {
  const [selected, setSelected] = useState(null);
  const th = theme(dark);
  const tx = t[lang];
  return (
    <div style={{padding:"48px 0 0",background:th.bg,minHeight:"100vh"}}>
      <div style={{padding:"0 20px 14px"}}>
        <h2 style={{margin:0,fontSize:18,fontWeight:800,color:th.text}}>🗺️ {tx.nearby}</h2>
      </div>
      <div style={{position:"relative",margin:"0 16px",borderRadius:20,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.12)"}}>
        <svg width="100%" viewBox="0 0 380 320" style={{display:"block",background:"#E8F4E8"}}>
          <MapBackground/>
          {deals.map(deal=>{
            const x=toX(deal.lng), y=toY(deal.lat);
            const isSel=selected?.key===deal.key;
            return (
              <g key={deal.key} onClick={()=>setSelected(isSel?null:deal)} style={{cursor:"pointer"}}>
                <circle cx={x} cy={y} r={isSel?22:18} fill={deal.color} opacity={0.2}/>
                <circle cx={x} cy={y} r={isSel?16:13} fill={deal.color} stroke="#fff" strokeWidth={2}/>
                <text x={x} y={y+5} textAnchor="middle" fontSize={isSel?"13":"11"}>{deal.logo}</text>
                {isSel&&<text x={x} y={y-22} textAnchor="middle" fontSize="10" fill="#1A1A2E" fontWeight="bold">-{deal.discount}%</text>}
              </g>
            );
          })}
          <circle cx="190" cy="175" r="10" fill="#E63946" opacity="0.25"/>
          <circle cx="190" cy="175" r="6" fill="#E63946" stroke="#fff" strokeWidth="2"/>
        </svg>
      </div>
      {selected&&(
        <div onClick={()=>onDealClick(selected)} style={{margin:"14px 16px 0",background:th.card,borderRadius:16,
          padding:16,display:"flex",alignItems:"center",gap:14,boxShadow:"0 4px 16px rgba(0,0,0,0.10)",cursor:"pointer"}}>
          <div style={{background:selected.color+"20",borderRadius:12,width:52,height:52,
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>
            {selected.logo}
          </div>
          <div style={{flex:1}}>
            <div style={{fontWeight:700,fontSize:15,color:th.text}}>{selected.storeName}</div>
            <div style={{fontSize:12,color:th.sub}}>{selected.title[lang]}</div>
            <div style={{fontSize:11,color:th.sub,fontWeight:600,marginTop:3}}>⏰ {daysLeftLabel(selected.expiryDate,lang)} {tx.left}</div>
          </div>
          <div style={{background:selected.color,color:"#fff",borderRadius:10,padding:"6px 12px",fontWeight:800,fontSize:16}}>-{selected.discount}%</div>
        </div>
      )}
      <div style={{padding:"16px 16px 0"}}>
        {deals.slice(0,5).map(deal=>(
          <div key={deal.key} onClick={()=>onDealClick(deal)} style={{background:th.card,borderRadius:14,
            padding:"12px 14px",marginBottom:10,display:"flex",alignItems:"center",gap:12,
            boxShadow:"0 1px 6px rgba(0,0,0,0.06)",cursor:"pointer"}}>
            <div style={{background:deal.color+"18",borderRadius:10,width:44,height:44,
              display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>
              {deal.logo}
            </div>
            <div style={{flex:1}}>
              <div style={{fontWeight:700,fontSize:13,color:th.text}}>{deal.storeName}</div>
              <div style={{fontSize:11,color:th.sub}}>📍 {deal.storeAddress}</div>
            </div>
            <div style={{background:deal.color,color:"#fff",borderRadius:8,padding:"4px 10px",fontWeight:800,fontSize:14}}>-{deal.discount}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniMapPicker({ lang, location, onChange }) {
  const tx = t[lang];
  const svgRef = useRef(null);
  const handleClick = (e) => {
    const svg=svgRef.current, rect=svg.getBoundingClientRect();
    const px=((e.clientX-rect.left)/rect.width)*380;
    const py=((e.clientY-rect.top)/rect.height)*320;
    onChange(fromXY(px,py));
  };
  const pinX=location?toX(location.lng):190, pinY=location?toY(location.lat):160;
  return (
    <div>
      <div style={{position:"relative",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.08)",border:"1.5px solid #E8E8E8"}}>
        <svg ref={svgRef} width="100%" viewBox="0 0 380 320" onClick={handleClick} style={{display:"block",background:"#E8F4E8",cursor:"crosshair"}}>
          <MapBackground/>
          {location&&(
            <g>
              <circle cx={pinX} cy={pinY} r="16" fill="#E63946" opacity="0.25"/>
              <circle cx={pinX} cy={pinY} r="9" fill="#E63946" stroke="#fff" strokeWidth="2.5"/>
              <text x={pinX} y={pinY+4} textAnchor="middle" fontSize="11">📍</text>
            </g>
          )}
        </svg>
      </div>
      <p style={{fontSize:12,color:location?"#00B894":"#AAA",marginTop:8,fontWeight:600,textAlign:"center"}}>
        {location?tx.locationSet:tx.pickOnMapHint}
      </p>
    </div>
  );
}


// =====================================================
// STYLE CONSTANTS (generated per dark mode)
// =====================================================
const mkStyles = (dark) => {
  const th = theme(dark);
  return {
    label: {fontSize:13,fontWeight:600,color:th.sub,marginBottom:6,display:"block"},
    input: {width:"100%",padding:"14px 16px",borderRadius:14,border:`1.5px solid ${th.border}`,
      background:th.card,fontSize:15,outline:"none",marginBottom:18,
      boxSizing:"border-box",color:th.text},
    textarea: {width:"100%",padding:"14px 16px",borderRadius:14,border:`1.5px solid ${th.border}`,
      background:th.card,fontSize:15,outline:"none",marginBottom:18,
      boxSizing:"border-box",color:th.text,minHeight:80,resize:"vertical",fontFamily:"inherit"},
    btn: {width:"100%",padding:"16px",background:"#E63946",color:"#fff",border:"none",
      borderRadius:16,fontSize:16,fontWeight:800,cursor:"pointer",
      boxShadow:"0 4px 16px rgba(230,57,70,0.3)"},
    ghostBtn: {width:"100%",padding:"14px",background:th.card,color:"#E63946",
      border:"1.5px solid #E63946",borderRadius:14,fontSize:15,fontWeight:700,cursor:"pointer"},
    secTitle: {fontSize:15,fontWeight:800,color:th.text,margin:"0 0 4px"},
    secDesc: {fontSize:12,color:th.sub,margin:"0 0 16px"},
  };
};

// =====================================================
// PAYMENT MODAL
// =====================================================
function PaymentModal({ lang, dark, total, onClose, onSuccess }) {
  const tx = t[lang];
  const th = theme(dark);
  const s = mkStyles(dark);
  const [method, setMethod] = useState("payme");
  const methods = [
    {id:"payme",label:tx.payPayme,icon:"💳",color:"#1BA8FF"},
    {id:"click",label:tx.payClick,icon:"🔵",color:"#0059A3"},
    {id:"uzum",label:tx.payUzum,icon:"🟣",color:"#7B2FBE"},
    {id:"cash",label:tx.payCash,icon:"💵",color:"#00B894"},
  ];
  return (
    <ModalSheet onClose={onClose} dark={dark} maxHeight="75vh">
      <h3 style={{...s.secTitle,textAlign:"center",marginBottom:20}}>{tx.payTitle}</h3>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
        {methods.map(m=>(
          <button key={m.id} onClick={()=>setMethod(m.id)} style={{
            padding:"14px 10px",borderRadius:14,cursor:"pointer",textAlign:"center",
            border:`2px solid ${method===m.id?m.color:th.border}`,
            background:method===m.id?m.color+"15":th.card,
          }}>
            <div style={{fontSize:24,marginBottom:4}}>{m.icon}</div>
            <div style={{fontSize:12,fontWeight:700,color:method===m.id?m.color:th.text}}>{m.label}</div>
          </button>
        ))}
      </div>
      <div style={{background:th.card2,borderRadius:14,padding:"14px 18px",marginBottom:20,
        display:"flex",justifyContent:"space-between",alignItems:"center",border:`1px solid ${th.border}`}}>
        <span style={{color:th.sub,fontWeight:600}}>{tx.total}</span>
        <span style={{fontWeight:900,fontSize:20,color:"#E63946"}}>{formatPrice(total)} {tx.sumShort}</span>
      </div>
      <button onClick={onSuccess} style={s.btn}>{tx.payNow} — {formatPrice(total)} {tx.sumShort}</button>
      <button onClick={onClose} style={{...s.ghostBtn,marginTop:10}}>{tx.cancel}</button>
    </ModalSheet>
  );
}

// =====================================================
// COUPON VIEW
// =====================================================
function CouponCard({ coupon, lang, dark, onUse }) {
  const th = theme(dark);
  const tx = t[lang];
  const [showQR, setShowQR] = useState(false);
  return (
    <div style={{background:th.card,borderRadius:18,overflow:"hidden",
      boxShadow:"0 2px 12px rgba(0,0,0,0.08)",marginBottom:14,
      border:`1px solid ${coupon.used?"#ccc":coupon.color+"44"}`}}>
      <div style={{background:coupon.used?"#F0F0F0":`linear-gradient(135deg,${coupon.color},${coupon.color}cc)`,
        padding:"16px 18px",display:"flex",alignItems:"center",gap:12}}>
        <span style={{fontSize:28}}>{coupon.logo}</span>
        <div style={{flex:1}}>
          <div style={{fontSize:14,fontWeight:800,color:coupon.used?"#999":"#fff"}}>{coupon.storeName}</div>
          <div style={{fontSize:12,color:coupon.used?"#bbb":"rgba(255,255,255,0.85)"}}>
            {coupon.productName[lang]||coupon.productName.uz}
          </div>
        </div>
        <div style={{background:"rgba(255,255,255,0.25)",borderRadius:10,padding:"6px 12px",
          fontWeight:900,fontSize:18,color:coupon.used?"#999":"#fff"}}>
          -{coupon.discount}%
        </div>
      </div>
      <div style={{padding:"14px 18px"}}>
        {showQR ? (
          <div style={{textAlign:"center",padding:"10px 0"}}>
            <QRCode code={coupon.code} color={coupon.used?"#aaa":coupon.color}/>
            <div style={{fontFamily:"monospace",fontSize:20,fontWeight:900,letterSpacing:4,
              color:coupon.used?"#aaa":coupon.color,margin:"12px 0 4px"}}>{coupon.code}</div>
            <div style={{fontSize:12,color:th.sub,marginBottom:12}}>{tx.couponHint}</div>
            {!coupon.used&&(
              <button onClick={()=>onUse(coupon.id)} style={{background:"#E63946",color:"#fff",
                border:"none",borderRadius:12,padding:"10px 24px",fontWeight:700,cursor:"pointer",fontSize:13}}>
                {tx.useCoupon}
              </button>
            )}
            {coupon.used&&<div style={{color:"#aaa",fontWeight:700,fontSize:13}}>✓ {tx.couponUsed}</div>}
          </div>
        ) : (
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{fontSize:11,color:th.sub}}>{tx.expires}</div>
              <div style={{fontWeight:700,fontSize:13,color:th.text}}>{daysLeftLabel(coupon.expiryDate,lang)}</div>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:11,color:th.sub}}>{tx.couponTitle}</div>
              <div style={{fontFamily:"monospace",fontSize:15,fontWeight:900,
                color:coupon.used?"#aaa":coupon.color}}>{coupon.code}</div>
            </div>
            <button onClick={()=>setShowQR(true)} style={{background:coupon.used?"#F0F0F0":"#E63946",
              color:coupon.used?"#aaa":"#fff",border:"none",borderRadius:12,
              padding:"8px 16px",fontWeight:700,cursor:"pointer",fontSize:12}}>
              {coupon.used?`✓ ${tx.couponUsed}`:"QR"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


// =====================================================
// STORE STATS PANEL
// =====================================================
function StoreStats({ lang, dark, store, coupons }) {
  const th = theme(dark);
  const tx = t[lang];
  const storeCoupons = coupons.filter(c=>c.storeId===store.id);
  const usedCoupons = storeCoupons.filter(c=>c.used).length;
  const totalRevenue = storeCoupons.filter(c=>c.used).reduce((sum,c)=>{
    const prod = store.products.find(p=>p.id===c.productId);
    if(!prod) return sum;
    return sum + (prod.originalPrice*(1-(c.discount/100)));
  },0);
  const stats = [
    {icon:"👁️",label:tx.statsViews,value:(store.views||0).toLocaleString("ru-RU"),color:"#0984E3"},
    {icon:"🎟️",label:tx.statsCoupons,value:storeCoupons.length,color:"#E63946"},
    {icon:"🔔",label:tx.statsSubscribers,value:(store.subscriberBase||0)+(store.extraSubs||0),color:"#00B894"},
    {icon:"💰",label:tx.statsRevenue,value:formatPrice(totalRevenue)+" "+tx.sumShort,color:"#FFB400"},
  ];
  return (
    <div style={{marginBottom:24}}>
      <h3 style={{fontSize:15,fontWeight:800,color:th.text,margin:"0 0 12px"}}>📊 {tx.statsTitle}</h3>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {stats.map((s,i)=>(
          <div key={i} style={{background:s.color+"15",borderRadius:14,padding:"14px 16px",
            border:`1px solid ${s.color}30`}}>
            <div style={{fontSize:22,marginBottom:4}}>{s.icon}</div>
            <div style={{fontSize:18,fontWeight:900,color:s.color}}>{s.value}</div>
            <div style={{fontSize:11,color:th.sub,marginTop:2}}>{s.label}</div>
          </div>
        ))}
      </div>
      {storeCoupons.length>0&&(
        <div style={{background:th.card,borderRadius:14,padding:"12px 16px",marginTop:10,
          border:`1px solid ${th.border}`}}>
          <div style={{fontSize:12,color:th.sub,marginBottom:6}}>Kupon holati</div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <div style={{flex:1,height:8,borderRadius:4,background:th.border,overflow:"hidden"}}>
              <div style={{height:"100%",borderRadius:4,background:"#00B894",
                width:`${storeCoupons.length?Math.round(usedCoupons/storeCoupons.length*100):0}%`}}/>
            </div>
            <span style={{fontSize:12,color:th.text,fontWeight:700,flexShrink:0}}>
              {usedCoupons}/{storeCoupons.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// =====================================================
// DISCOUNT MODAL
// =====================================================
function DiscountModal({ lang, dark, product, onClose, onApply }) {
  const tx = t[lang]; const th = theme(dark); const s = mkStyles(dark);
  const [percent, setPercent] = useState(product.discount?.percent?.toString()||"");
  const [expiry, setExpiry] = useState(product.discount?.expiryDate||isoDaysFromNow(3));
  const canApply = percent&&Number(percent)>0&&Number(percent)<100&&expiry;
  return (
    <ModalSheet onClose={onClose} dark={dark} maxHeight="70vh">
      <h3 style={{...s.secTitle,textAlign:"center"}}>{tx.discountModalTitle}</h3>
      <p style={{...s.secDesc,textAlign:"center"}}>{product.name[lang]||product.name.uz}</p>
      <label style={s.label}>{tx.discountPercent}</label>
      <input type="number" min="1" max="99" placeholder="30" value={percent}
        onChange={e=>setPercent(e.target.value)} style={s.input}/>
      <label style={s.label}>{tx.expiryDate}</label>
      <input type="date" value={expiry} min={new Date().toISOString().slice(0,10)}
        onChange={e=>setExpiry(e.target.value)} style={s.input}/>
      {product.originalPrice>0&&percent&&(
        <div style={{background:"#FFF0F0",borderRadius:14,padding:16,marginBottom:16,textAlign:"center"}}>
          <span style={{textDecoration:"line-through",color:"#AAA",fontSize:13}}>{formatPrice(product.originalPrice)} {tx.sumShort}</span>
          {" → "}
          <b style={{color:"#E63946",fontSize:17}}>{formatPrice(product.originalPrice*(1-Number(percent)/100))} {tx.sumShort}</b>
        </div>
      )}
      <button onClick={()=>canApply&&onApply({percent:Number(percent),expiryDate:expiry})}
        style={{...s.btn,opacity:canApply?1:0.5,marginBottom:10}}>{tx.applyDiscount}</button>
      <button onClick={onClose} style={s.ghostBtn}>{tx.cancel}</button>
    </ModalSheet>
  );
}

// =====================================================
// REVIEW MODAL
// =====================================================
function ReviewModal({ lang, dark, title, onClose, onSubmit }) {
  const tx = t[lang]; const s = mkStyles(dark);
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  return (
    <ModalSheet onClose={onClose} dark={dark} maxHeight="60vh">
      <h3 style={{...s.secTitle,textAlign:"center"}}>{title}</h3>
      <div style={{display:"flex",justifyContent:"center",margin:"16px 0 20px"}}>
        <StarRating value={stars} onChange={setStars} size={34}/>
      </div>
      <textarea placeholder={tx.commentPh} value={comment}
        onChange={e=>setComment(e.target.value)} style={s.textarea}/>
      <button onClick={()=>stars>0&&onSubmit({stars,comment})}
        style={{...s.btn,opacity:stars>0?1:0.5,marginBottom:10}}>{tx.submitReview}</button>
      <button onClick={onClose} style={s.ghostBtn}>{tx.cancel}</button>
    </ModalSheet>
  );
}


// =====================================================
// STORE VIEW
// =====================================================
function StoreView({ lang, dark, store, isOwner, isSubscribed, coupons,
  onBack, onSubscribeToggle, onAddProduct, onApplyDiscount,
  onRemoveDiscount, onDeleteProduct, onRateProduct, onRateStore, onOpenDeal }) {
  const tx = t[lang]; const th = theme(dark); const s = mkStyles(dark);
  const [discountTarget, setDiscountTarget] = useState(null);
  const [reviewTarget, setReviewTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const storeRating = avgRating(store.reviews);

  return (
    <div style={{minHeight:"100vh",background:th.bg,maxWidth:430,margin:"0 auto",paddingBottom:30}}>
      <div style={{background:"linear-gradient(135deg,#E63946 0%,#C1121F 100%)",padding:"48px 20px 22px",color:"#fff"}}>
        <button onClick={onBack} style={{background:"rgba(255,255,255,0.2)",border:"none",borderRadius:10,
          width:34,height:34,color:"#fff",fontSize:16,cursor:"pointer",marginBottom:16}}>←</button>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <div style={{width:64,height:64,borderRadius:18,background:"rgba(255,255,255,0.2)",
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,flexShrink:0}}>{store.logo}</div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:19,fontWeight:900}}>{store.name}</div>
            <div style={{fontSize:12,opacity:0.85,marginTop:2}}>📍 {store.address}</div>
            <div style={{display:"flex",alignItems:"center",gap:6,marginTop:4,fontSize:12}}>
              <span style={{color:"#FFB400"}}>★</span>
              <span style={{fontWeight:700}}>{storeRating?storeRating.toFixed(1):"—"}</span>
              <span style={{opacity:0.7}}>({store.reviews.length})</span>
              <span style={{opacity:0.6}}>· {(store.subscriberBase||0)+(store.extraSubs||0)+(isSubscribed?1:0)} {tx.subscribers}</span>
            </div>
          </div>
        </div>
        {isOwner
          ? <div style={{marginTop:16,background:"rgba(255,255,255,0.2)",borderRadius:10,
              padding:"8px 12px",fontSize:12,fontWeight:700,textAlign:"center"}}>{tx.ownStoreBadge}</div>
          : <button onClick={onSubscribeToggle} style={{marginTop:16,width:"100%",padding:"12px",
              borderRadius:14,border:"none",cursor:"pointer",fontWeight:800,fontSize:14,
              background:isSubscribed?"rgba(255,255,255,0.25)":"#fff",
              color:isSubscribed?"#fff":"#E63946"}}>
              {isSubscribed?tx.subscribed:tx.subscribe}
            </button>
        }
      </div>

      <div style={{padding:20}}>
        {isOwner&&<StoreStats lang={lang} dark={dark} store={store} coupons={coupons}/>}

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <h3 style={{margin:0,fontSize:16,fontWeight:800,color:th.text}}>{tx.productsInStore}</h3>
          {isOwner&&<button onClick={onAddProduct} style={{background:"#E63946",color:"#fff",
            border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:700,cursor:"pointer"}}>
            {tx.addProductBtn}</button>}
        </div>

        {store.products.length===0
          ? <div style={{textAlign:"center",padding:"40px 0",color:"#AAA"}}>
              <div style={{fontSize:48,marginBottom:12}}>📦</div>
              <div style={{fontWeight:600,color:th.sub}}>{tx.noProductsInStore}</div>
              <div style={{fontSize:13,marginTop:4,marginBottom:isOwner?20:0,color:th.sub}}>{tx.noProductsInStoreDesc}</div>
              {isOwner&&<button onClick={onAddProduct} style={{...s.btn,width:"auto",padding:"12px 22px"}}>{tx.addProductBtn}</button>}
            </div>
          : store.products.map(prod=>{
              const hasDiscount = prod.discount&&!isExpired(prod.discount.expiryDate);
              const pRating = avgRating(prod.reviews);
              return (
                <div key={prod.id} style={{background:th.card,borderRadius:16,padding:14,
                  marginBottom:12,boxShadow:"0 2px 10px rgba(0,0,0,0.06)"}}>
                  <div style={{display:"flex",gap:12}}>
                    <div onClick={()=>!isOwner&&onOpenDeal&&hasDiscount&&onOpenDeal(store.id,prod.id)}
                      style={{width:60,height:60,borderRadius:12,overflow:"hidden",flexShrink:0,
                        background:store.color+"18",display:"flex",alignItems:"center",
                        justifyContent:"center",fontSize:28,cursor:hasDiscount?"pointer":"default"}}>
                      {prod.photos?.length?<img src={prod.photos[0]} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:store.logo}
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontWeight:700,fontSize:14,color:th.text}}>{prod.name[lang]||prod.name.uz}</div>
                      <div style={{fontSize:11,color:th.sub,margin:"2px 0"}}>{categoryLabel(prod.category,lang)}</div>
                      {prod.originalPrice>0&&(
                        hasDiscount
                          ? <div style={{fontSize:12}}>
                              <span style={{textDecoration:"line-through",color:"#AAA"}}>{formatPrice(prod.originalPrice)}</span>{" "}
                              <b style={{color:"#E63946"}}>{formatPrice(prod.originalPrice*(1-prod.discount.percent/100))} {tx.sumShort}</b>
                            </div>
                          : <div style={{fontSize:12,color:th.text,fontWeight:700}}>{formatPrice(prod.originalPrice)} {tx.sumShort}</div>
                      )}
                      <div style={{display:"flex",alignItems:"center",gap:6,marginTop:4}}>
                        <StarRating value={Math.round(pRating)} readOnly size={12}/>
                        <span style={{fontSize:11,color:"#AAA"}}>({prod.reviews?.length||0})</span>
                        {prod.delivery&&<span style={{fontSize:10,color:"#00B894",fontWeight:700}}>🚚</span>}
                        {hasDiscount&&<span style={{background:store.color,color:"#fff",borderRadius:7,
                          padding:"2px 7px",fontSize:11,fontWeight:800,marginLeft:"auto"}}>-{prod.discount.percent}%</span>}
                      </div>
                    </div>
                    {isOwner&&<button onClick={()=>setDeleteTarget(prod.id)} style={{background:"none",
                      border:"none",color:"#E63946",fontSize:13,cursor:"pointer",alignSelf:"flex-start"}}>✕</button>}
                  </div>
                  <div style={{display:"flex",gap:8,marginTop:12}}>
                    {isOwner
                      ? <button onClick={()=>setDiscountTarget(prod)} style={{flex:1,padding:"9px",
                          borderRadius:10,border:"none",background:hasDiscount?"#F0F0F0":"#FFF0F0",
                          color:hasDiscount?"#555":"#E63946",fontWeight:700,fontSize:12,cursor:"pointer"}}>
                          {hasDiscount?tx.editDiscount:tx.makeDiscount}
                        </button>
                      : <button onClick={()=>setReviewTarget(prod.id)} style={{flex:1,padding:"9px",
                          borderRadius:10,border:`1.5px solid ${th.border}`,background:th.card,
                          color:th.sub,fontWeight:700,fontSize:12,cursor:"pointer"}}>⭐ {tx.rateProduct}</button>
                    }
                    {hasDiscount&&isOwner&&(
                      <button onClick={()=>onRemoveDiscount(prod.id)} style={{flex:1,padding:"9px",
                        borderRadius:10,border:`1.5px solid ${th.border}`,background:th.card,
                        color:"#AAA",fontWeight:700,fontSize:12,cursor:"pointer"}}>{tx.removeDiscount}</button>
                    )}
                  </div>
                </div>
              );
            })
        }

        <div style={{marginTop:24}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <h3 style={{margin:0,fontSize:16,fontWeight:800,color:th.text}}>{tx.storeReviews}</h3>
            {!isOwner&&<button onClick={()=>setReviewTarget("store")} style={{background:th.card,
              border:"1.5px solid #E63946",color:"#E63946",borderRadius:10,padding:"6px 12px",
              fontSize:12,fontWeight:700,cursor:"pointer"}}>{tx.leaveReview}</button>}
          </div>
          {store.reviews.length===0
            ? <p style={{color:th.sub,fontSize:13}}>{tx.noReviews}</p>
            : store.reviews.map((r,i)=>(
                <div key={i} style={{background:th.card,borderRadius:14,padding:14,marginBottom:10,
                  boxShadow:"0 1px 6px rgba(0,0,0,0.05)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                    <span style={{fontWeight:700,fontSize:13,color:th.text}}>{r.author}</span>
                    <StarRating value={r.stars} readOnly size={13}/>
                  </div>
                  {r.comment&&<p style={{margin:0,fontSize:13,color:th.sub}}>{r.comment}</p>}
                </div>
              ))
          }
        </div>
      </div>

      {discountTarget&&<DiscountModal lang={lang} dark={dark} product={discountTarget}
        onClose={()=>setDiscountTarget(null)}
        onApply={d=>{onApplyDiscount(discountTarget.id,d);setDiscountTarget(null);}}/>}
      {reviewTarget&&<ReviewModal lang={lang} dark={dark}
        title={reviewTarget==="store"?tx.leaveReview+" — "+store.name:tx.rateProduct}
        onClose={()=>setReviewTarget(null)}
        onSubmit={review=>{
          if(reviewTarget==="store") onRateStore(review); else onRateProduct(reviewTarget,review);
          setReviewTarget(null);
        }}/>}
      {deleteTarget&&(
        <ModalSheet onClose={()=>setDeleteTarget(null)} dark={dark} maxHeight="40vh">
          <p style={{fontSize:15,color:th.text,fontWeight:600,marginBottom:20,textAlign:"center"}}>{tx.confirmDelete}</p>
          <div style={{display:"flex",gap:10}}>
            <button onClick={()=>setDeleteTarget(null)} style={{flex:1,padding:12,borderRadius:12,
              border:`1.5px solid ${th.border}`,background:th.card,color:th.text,fontWeight:700,cursor:"pointer"}}>{tx.no}</button>
            <button onClick={()=>{onDeleteProduct(deleteTarget);setDeleteTarget(null);}} style={{flex:1,
              padding:12,borderRadius:12,border:"none",background:"#E63946",color:"#fff",fontWeight:700,cursor:"pointer"}}>{tx.yes}</button>
          </div>
        </ModalSheet>
      )}
    </div>
  );
}


// =====================================================
// ADD PRODUCT FORM
// =====================================================
const emptyProduct = {category:"",name:"",description:"",params:[],originalPrice:"",
  address:"",location:null,phone:"",photos:[],delivery:false,deliveryPrice:""};

function AddProductForm({ lang, dark, store, onCancel, onSubmit }) {
  const tx = t[lang]; const th = theme(dark); const s = mkStyles(dark);
  const cats = listingCategories(lang);
  const [formStep, setFormStep] = useState(1);
  const [p, setP] = useState({...emptyProduct,address:store.address||"",
    phone:store.phone||"",location:store.lat?{lat:store.lat,lng:store.lng}:null});
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const update = (patch) => setP(prev=>({...prev,...patch}));
  const handleFiles = (e) => {
    Array.from(e.target.files||[]).forEach(file=>{
      const reader = new FileReader();
      reader.onload = ev => setP(l=>({...l,photos:[...l.photos,ev.target.result]}));
      reader.readAsDataURL(file);
    });
    e.target.value="";
  };
  const canGoStep2=!!p.category, canGoStep3=p.name.trim().length>0;
  const canSubmit=p.address.trim().length>0&&p.photos.length>0;
  const goNext=()=>{
    setError("");
    if(formStep===1&&!canGoStep2){setError(tx.fillRequired);return;}
    if(formStep===2&&!canGoStep3){setError(tx.fillRequired);return;}
    setFormStep(s=>Math.min(4,s+1));
  };
  const goBack=()=>{setError("");formStep===1?onCancel():setFormStep(s=>s-1);};
  const catInfo=cats.find(c=>c.id===p.category);

  return (
    <div style={{minHeight:"100vh",background:th.bg}}>
      <div style={{background:"linear-gradient(135deg,#E63946 0%,#C1121F 100%)",
        padding:"48px 20px 20px",color:"#fff",position:"sticky",top:0,zIndex:10}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
          <button onClick={goBack} style={{background:"rgba(255,255,255,0.2)",border:"none",
            borderRadius:10,width:34,height:34,color:"#fff",fontSize:16,cursor:"pointer"}}>←</button>
          <div>
            <div style={{fontSize:17,fontWeight:800}}>{tx.addListing}</div>
            <div style={{fontSize:11,opacity:0.85}}>{tx.step} {formStep} {tx.of} 4</div>
          </div>
        </div>
        <div style={{display:"flex",gap:6}}>
          {[1,2,3,4].map(n=><div key={n} style={{flex:1,height:4,borderRadius:2,
            background:n<=formStep?"#fff":"rgba(255,255,255,0.3)"}}/>)}
        </div>
      </div>
      <div style={{padding:"20px 20px 110px"}}>
        {formStep===1&&(
          <div>
            <h3 style={s.secTitle}>{tx.chooseCategory}</h3>
            <p style={s.secDesc}>{tx.chooseCategoryDesc}</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {cats.map(c=>(
                <button key={c.id} onClick={()=>update({category:c.id})} style={{
                  display:"flex",flexDirection:"column",alignItems:"flex-start",gap:8,
                  padding:"16px 14px",borderRadius:16,cursor:"pointer",textAlign:"left",
                  border:p.category===c.id?`2px solid ${c.color}`:`2px solid ${th.border}`,
                  background:p.category===c.id?c.color+"12":th.card}}>
                  <span style={{fontSize:26}}>{c.emoji}</span>
                  <span style={{fontSize:13,fontWeight:700,color:th.text}}>{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {formStep===2&&(
          <div>
            <h3 style={s.secTitle}>{tx.productInfo}</h3>
            <p style={s.secDesc}>{catInfo?.emoji} {catInfo?.label}</p>
            <label style={s.label}>{tx.productName} <span style={{color:"#E63946"}}>{tx.required}</span></label>
            <input placeholder={tx.productNamePh} value={p.name} onChange={e=>update({name:e.target.value})} style={s.input}/>
            <label style={s.label}>{tx.productDesc}</label>
            <textarea placeholder={tx.productDescPh} value={p.description} onChange={e=>update({description:e.target.value})} style={s.textarea}/>
            {p.params.map((row,idx)=>(
              <div key={idx} style={{display:"flex",gap:8,marginBottom:10,alignItems:"center"}}>
                <input placeholder={tx.paramNamePh} value={row.name}
                  onChange={e=>{const n=[...p.params];n[idx]={...n[idx],name:e.target.value};update({params:n});}}
                  style={{...s.input,marginBottom:0,flex:1}}/>
                <input placeholder={tx.paramValuePh} value={row.value}
                  onChange={e=>{const n=[...p.params];n[idx]={...n[idx],value:e.target.value};update({params:n});}}
                  style={{...s.input,marginBottom:0,flex:1}}/>
                <button onClick={()=>update({params:p.params.filter((_,i)=>i!==idx)})}
                  style={{background:"#FFF0F0",border:"none",borderRadius:10,width:38,height:38,
                    color:"#E63946",fontSize:16,cursor:"pointer",flexShrink:0}}>✕</button>
              </div>
            ))}
            <button onClick={()=>update({params:[...p.params,{name:"",value:""}]})}
              style={{width:"100%",padding:"10px",background:th.card,border:`1.5px dashed ${th.border}`,
                borderRadius:12,color:th.sub,fontWeight:600,fontSize:13,cursor:"pointer"}}>{tx.addParam}</button>
          </div>
        )}
        {formStep===3&&(
          <div>
            <h3 style={s.secTitle}>{tx.priceInfo}</h3>
            <label style={s.label}>{tx.originalPrice}</label>
            <input type="number" min="0" placeholder="500 000" value={p.originalPrice}
              onChange={e=>update({originalPrice:e.target.value})} style={s.input}/>
            <div style={{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",
              background:th.card2,borderRadius:14,marginBottom:18,border:`1px solid ${th.border}`}}>
              <input type="checkbox" checked={p.delivery} onChange={e=>update({delivery:e.target.checked})}
                style={{width:20,height:20,accentColor:"#E63946",cursor:"pointer"}}/>
              <span style={{fontSize:14,color:th.text,fontWeight:600}}>🚚 {tx.deliveryAvail}</span>
            </div>
            {p.delivery&&(
              <>
                <label style={s.label}>{tx.deliveryPrice}</label>
                <input type="number" min="0" placeholder="5 000" value={p.deliveryPrice}
                  onChange={e=>update({deliveryPrice:e.target.value})} style={s.input}/>
              </>
            )}
          </div>
        )}
        {formStep===4&&(
          <div>
            <h3 style={s.secTitle}>{tx.locationInfo}</h3>
            <label style={s.label}>{tx.storeAddress} <span style={{color:"#E63946"}}>{tx.required}</span></label>
            <input placeholder={tx.storeAddressPh} value={p.address}
              onChange={e=>update({address:e.target.value})} style={s.input}/>
            <label style={s.label}>{tx.pickOnMap}</label>
            <div style={{marginBottom:18}}><MiniMapPicker lang={lang} location={p.location} onChange={loc=>update({location:loc})}/></div>
            <label style={s.label}>{tx.phone}</label>
            <input type="tel" placeholder={tx.phonePlaceholder} value={p.phone}
              onChange={e=>update({phone:e.target.value})} style={s.input}/>
            <label style={s.label}>{tx.photos} <span style={{color:"#E63946"}}>{tx.required}</span></label>
            <div style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom:12}}>
              {p.photos.map((src,idx)=>(
                <div key={idx} style={{position:"relative",width:84,height:84,borderRadius:12,overflow:"hidden"}}>
                  <img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                  <button onClick={()=>update({photos:p.photos.filter((_,i)=>i!==idx)})}
                    style={{position:"absolute",top:3,right:3,background:"rgba(0,0,0,0.55)",
                      border:"none",borderRadius:8,color:"#fff",width:22,height:22,fontSize:12,cursor:"pointer"}}>✕</button>
                </div>
              ))}
              <button onClick={()=>fileInputRef.current?.click()} style={{width:84,height:84,
                borderRadius:12,border:`1.5px dashed ${th.border}`,background:th.card,color:"#AAA",fontSize:24,cursor:"pointer"}}>＋</button>
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFiles} style={{display:"none"}}/>
          </div>
        )}
        {error&&<div style={{color:"#E63946",fontSize:13,fontWeight:600,marginTop:10,textAlign:"center"}}>{error}</div>}
      </div>
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",
        maxWidth:430,background:th.card,borderTop:`1px solid ${th.border}`,
        padding:"14px 20px 24px",boxShadow:"0 -4px 20px rgba(0,0,0,0.06)",boxSizing:"border-box"}}>
        {formStep<4
          ? <button onClick={goNext} style={s.btn}>{tx.next}</button>
          : <button onClick={()=>{if(!canSubmit){setError(tx.fillRequired);return;}onSubmit(p);}}
              style={{...s.btn,opacity:canSubmit?1:0.6}}>{tx.submitListing}</button>
        }
      </div>
    </div>
  );
}

// =====================================================
// CREATE STORE FORM
// =====================================================
function CreateStoreForm({ lang, dark, userData, onCreate, onCancel }) {
  const tx = t[lang]; const th = theme(dark); const s = mkStyles(dark);
  const [name,setName]=useState(""); const [logo,setLogo]=useState("🏪");
  const [address,setAddress]=useState(""); const [location,setLocation]=useState(null);
  const logos=["🏪","🛍️","🍕","👕","📱","💄","☕","⚽","🛠️","🏠"];
  const canCreate=name.trim().length>0&&address.trim().length>0;
  return (
    <div style={{minHeight:"100vh",background:th.bg}}>
      <div style={{background:"linear-gradient(135deg,#E63946 0%,#C1121F 100%)",padding:"48px 20px 22px",color:"#fff"}}>
        <button onClick={onCancel} style={{background:"rgba(255,255,255,0.2)",border:"none",borderRadius:10,
          width:34,height:34,color:"#fff",fontSize:16,cursor:"pointer",marginBottom:16}}>←</button>
        <div style={{fontSize:19,fontWeight:900}}>{tx.createStore}</div>
        <div style={{fontSize:12,opacity:0.85,marginTop:4}}>{tx.createStoreSub}</div>
      </div>
      <div style={{padding:20}}>
        <label style={s.label}>{tx.storeLogo}</label>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:18}}>
          {logos.map(l=>(
            <button key={l} onClick={()=>setLogo(l)} style={{width:46,height:46,borderRadius:12,
              fontSize:22,cursor:"pointer",border:logo===l?"2px solid #E63946":`2px solid ${th.border}`,
              background:logo===l?"#FFF0F0":th.card}}>{l}</button>
          ))}
        </div>
        <label style={s.label}>{tx.storeName} <span style={{color:"#E63946"}}>{tx.required}</span></label>
        <input placeholder={tx.storeNamePh} value={name} onChange={e=>setName(e.target.value)} style={s.input}/>
        <label style={s.label}>{tx.storeAddress} <span style={{color:"#E63946"}}>{tx.required}</span></label>
        <input placeholder={tx.storeAddressPh} value={address} onChange={e=>setAddress(e.target.value)} style={s.input}/>
        <label style={s.label}>{tx.pickOnMap}</label>
        <div style={{marginBottom:22}}><MiniMapPicker lang={lang} location={location} onChange={setLocation}/></div>
        <button onClick={()=>canCreate&&onCreate({name,logo,address,location,phone:userData.phone||""})}
          style={{...s.btn,opacity:canCreate?1:0.5}}>{tx.createStoreBtn}</button>
      </div>
    </div>
  );
}


// =====================================================
// ONBOARDING
// =====================================================
function OnboardingStep({ step, setStep, lang, setLang, dark, userData, setUserData, onGuest }) {
  const tx = t[lang]; const th = theme(dark); const s = mkStyles(dark);
  const [code, setCode] = useState(["","","",""]);
  const codeRefs = [useRef(),useRef(),useRef(),useRef()];
  const handleCode = (val,idx) => {
    if(!/^\d?$/.test(val)) return;
    const n=[...code]; n[idx]=val; setCode(n);
    if(val&&idx<3) codeRefs[idx+1].current?.focus();
  };

  if(step===0) return (
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#E63946 0%,#C1121F 100%)",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:32,color:"#fff"}}>
      <div style={{position:"absolute",top:16,right:16,display:"flex",gap:6}}>
        {["uz","ru"].map(l=>(
          <button key={l} onClick={()=>setLang(l)} style={{padding:"6px 14px",borderRadius:20,border:"none",
            background:lang===l?"#fff":"rgba(255,255,255,0.25)",color:lang===l?"#E63946":"#fff",
            fontWeight:700,fontSize:13,cursor:"pointer"}}>{l==="uz"?"🇺🇿 UZ":"🇷🇺 RU"}</button>
        ))}
      </div>
      <div style={{fontSize:80,marginBottom:16}}>🏷️</div>
      <h1 style={{fontSize:36,fontWeight:900,margin:"0 0 8px",letterSpacing:-1}}>Chegirma.uz</h1>
      <p style={{opacity:0.85,fontSize:16,textAlign:"center",marginBottom:48}}>
        {lang==="uz"?"O'zbekistondagi eng yaxshi chegirmalar":"Лучшие скидки в Узбекистане"}
      </p>
      <button onClick={()=>setStep(1)} style={{background:"#fff",color:"#E63946",border:"none",
        borderRadius:16,padding:"16px 48px",fontSize:17,fontWeight:800,cursor:"pointer",
        boxShadow:"0 8px 24px rgba(0,0,0,0.15)",marginBottom:12,width:"100%",maxWidth:280}}>
        {lang==="uz"?"Boshlash":"Начать"} →
      </button>
      <button onClick={onGuest} style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"1.5px solid rgba(255,255,255,0.4)",
        borderRadius:16,padding:"14px 48px",fontSize:15,fontWeight:700,cursor:"pointer",width:"100%",maxWidth:280}}>
        👁️ {tx.guestMode}
      </button>
    </div>
  );

  if(step===1) return (
    <div style={{minHeight:"100vh",background:th.bg,display:"flex",flexDirection:"column",padding:"60px 24px 32px"}}>
      <div style={{fontSize:40,marginBottom:8}}>👤</div>
      <h2 style={{fontSize:26,fontWeight:800,color:th.text,margin:"0 0 6px"}}>{tx.welcome}</h2>
      <p style={{color:th.sub,marginBottom:32,fontSize:14}}>{lang==="uz"?"Ma'lumotlaringizni kiriting":"Введите ваши данные"}</p>
      <label style={s.label}>{tx.enterName}</label>
      <input placeholder={tx.namePlaceholder} value={userData.name}
        onChange={e=>setUserData({...userData,name:e.target.value})} style={s.input}/>
      <label style={s.label}>{tx.enterSurname}</label>
      <input placeholder={tx.surnamePlaceholder} value={userData.surname}
        onChange={e=>setUserData({...userData,surname:e.target.value})} style={s.input}/>
      <label style={s.label}>{tx.enterPhone}</label>
      <input placeholder={tx.phonePlaceholder} value={userData.phone}
        onChange={e=>setUserData({...userData,phone:e.target.value})} style={s.input} type="tel"/>
      <div style={{flex:1}}/>
      <button onClick={()=>userData.name&&userData.phone?setStep(2):null}
        style={{...s.btn,opacity:userData.name&&userData.phone?1:0.5}}>{tx.next}</button>
    </div>
  );

  if(step===2) return (
    <div style={{minHeight:"100vh",background:th.bg,display:"flex",flexDirection:"column",padding:"60px 24px 32px"}}>
      <div style={{fontSize:40,marginBottom:8}}>📱</div>
      <h2 style={{fontSize:26,fontWeight:800,color:th.text,margin:"0 0 6px"}}>{tx.smsCode}</h2>
      <p style={{color:th.sub,marginBottom:32,fontSize:14}}>{tx.smsHint}<br/><b style={{color:th.text}}>{userData.phone}</b></p>
      <div style={{display:"flex",gap:12,justifyContent:"center",marginBottom:28}}>
        {code.map((c,i)=>(
          <input key={i} ref={codeRefs[i]} value={c} onChange={e=>handleCode(e.target.value,i)} maxLength={1}
            style={{width:60,height:64,textAlign:"center",fontSize:26,fontWeight:800,
              border:"2px solid "+(c?"#E63946":"#E0E0E0"),borderRadius:14,
              background:th.card,outline:"none",color:th.text}}/>
        ))}
      </div>
      <p style={{textAlign:"center",color:"#AAA",fontSize:13,marginBottom:32}}>
        {lang==="uz"?"Kodni olmadingizmi? ":"Не получили код? "}
        <span style={{color:"#E63946",fontWeight:600,cursor:"pointer"}}>{tx.resend}</span>
      </p>
      <div style={{flex:1}}/>
      <button onClick={()=>setStep(3)} style={{...s.btn,opacity:code.every(c=>c)?1:0.5}}>{tx.confirm}</button>
    </div>
  );

  if(step===3) return (
    <div style={{minHeight:"100vh",background:th.bg,display:"flex",flexDirection:"column",
      alignItems:"center",padding:"60px 24px 32px"}}>
      <div style={{fontSize:40,marginBottom:8}}>📸</div>
      <h2 style={{fontSize:26,fontWeight:800,color:th.text,margin:"0 0 6px",textAlign:"center"}}>{tx.addPhoto}</h2>
      <p style={{color:th.sub,marginBottom:32,fontSize:14,textAlign:"center"}}>
        {lang==="uz"?"Profilingizni yanada shaxsiylashtiring":"Персонализируйте свой профиль"}
      </p>
      <div style={{width:120,height:120,borderRadius:60,background:userData.photo?"#E63946":"#E8E8E8",
        display:"flex",alignItems:"center",justifyContent:"center",fontSize:userData.photo?56:40,
        marginBottom:20,cursor:"pointer",border:"3px dashed #E63946"}}
        onClick={()=>setUserData({...userData,photo:"📸"})}>
        {userData.photo?"😊":"📷"}
      </div>
      <div style={{flex:1}}/>
      <button onClick={()=>setStep(4)} style={s.btn}>{lang==="uz"?"Davom etish":"Продолжить"}</button>
      <button onClick={()=>setStep(4)} style={{background:"none",border:"none",color:"#AAA",fontSize:14,cursor:"pointer",marginTop:14}}>{tx.skip}</button>
    </div>
  );

  if(step===4) return (
    <div style={{minHeight:"100vh",background:th.bg,display:"flex",flexDirection:"column",
      alignItems:"center",padding:"60px 24px 32px"}}>
      <div style={{fontSize:64,marginBottom:12}}>🔔</div>
      <h2 style={{fontSize:26,fontWeight:800,color:th.text,margin:"0 0 8px",textAlign:"center"}}>{tx.allowNotif}</h2>
      <p style={{color:th.sub,fontSize:14,textAlign:"center",marginBottom:40,lineHeight:1.6}}>{tx.notifDesc}</p>
      <div style={{background:th.card,borderRadius:20,padding:24,width:"100%",
        boxShadow:"0 4px 20px rgba(0,0,0,0.07)",marginBottom:40}}>
        {[{icon:"🛒",uz:"Sevimli do'konlarda yangi chegirmalar",ru:"Новые скидки в любимых магазинах"},
          {icon:"⏰",uz:"Chegirma muddati tugashidan oldin",ru:"До истечения срока скидки"},
          {icon:"📍",uz:"Yaqin atrofdagi takliflar",ru:"Предложения поблизости"}
        ].map((item,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 0",
            borderBottom:i<2?`1px solid ${th.border}`:"none"}}>
            <span style={{fontSize:24}}>{item.icon}</span>
            <span style={{fontSize:13,color:th.sub,flex:1}}>{item[lang]}</span>
          </div>
        ))}
      </div>
      <div style={{flex:1}}/>
      <button onClick={()=>setStep(5)} style={s.btn}>🔔 {tx.enable}</button>
      <button onClick={()=>setStep(5)} style={{background:"none",border:"none",color:"#AAA",fontSize:14,cursor:"pointer",marginTop:14}}>{tx.skip}</button>
    </div>
  );
  return null;
}


// =====================================================
// MAIN APP
// =====================================================
export default function App() {
  const [dark, toggleDark] = useDark();
  const [step, setStep] = useState(0);
  const [isGuest, setIsGuest] = useState(false);
  const [lang, setLang] = useState("uz");
  const [userData, setUserData] = useState({name:"",surname:"",phone:"",photo:""});
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [savedKeys, setSavedKeys] = useState([]);
  const [activeTab, setActiveTab] = useState("home");
  const [selectedKey, setSelectedKey] = useState(null);
  const [stores, setStores] = useState(initialStores);
  const [myStoreId, setMyStoreId] = useState(null);
  const [cart, setCart] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [profileView, setProfileView] = useState("main");
  const [viewingStoreId, setViewingStoreId] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [heartAnim, setHeartAnim] = useState(null);
  const [cartAnim, setCartAnim] = useState(false);

  const th = theme(dark);
  const s = mkStyles(dark);
  const tx = t[lang];

  // --- derived ---
  const activeDeals = (() => {
    const list = [];
    stores.forEach(store => store.products.forEach(prod => {
      if(prod.discount&&!isExpired(prod.discount.expiryDate)) {
        list.push({
          key:`${store.id}:${prod.id}`, storeId:store.id, storeName:store.name,
          storeAddress:store.address, storePhone:store.phone, productId:prod.id,
          category:prod.category, title:prod.name, description:prod.description,
          params:prod.params, originalPrice:prod.originalPrice, discount:prod.discount.percent,
          expiryDate:prod.discount.expiryDate, photos:prod.photos, logo:store.logo,
          color:store.color, lat:store.lat, lng:store.lng, reviews:prod.reviews||[],
          delivery:prod.delivery, deliveryPrice:prod.deliveryPrice,
        });
      }
    }));
    return list;
  })();

  const applySort = (list) => {
    if(sort==="discount") return [...list].sort((a,b)=>b.discount-a.discount);
    if(sort==="price_asc") return [...list].sort((a,b)=>
      (a.originalPrice*(1-a.discount/100))-(b.originalPrice*(1-b.discount/100)));
    if(sort==="price_desc") return [...list].sort((a,b)=>
      (b.originalPrice*(1-b.discount/100))-(a.originalPrice*(1-a.discount/100)));
    if(sort==="expiry") return [...list].sort((a,b)=>new Date(a.expiryDate)-new Date(b.expiryDate));
    return list;
  };

  const filtered = applySort(activeDeals.filter(d => {
    const matchCat = activeCategory==="all"||d.category===activeCategory;
    const matchSearch = d.storeName.toLowerCase().includes(search.toLowerCase())||
      (d.title[lang]||"").toLowerCase().includes(search.toLowerCase());
    return matchCat&&matchSearch;
  }));

  const savedList = activeDeals.filter(d=>savedKeys.includes(d.key));
  const selectedDeal = selectedKey ? activeDeals.find(d=>d.key===`${selectedKey.storeId}:${selectedKey.productId}`) : null;
  const myStore = myStoreId ? stores.find(s=>s.id===myStoreId) : null;
  const viewingStore = viewingStoreId ? stores.find(s=>s.id===viewingStoreId) : null;

  const cartDetailed = cart.map(c => {
    const store=stores.find(s=>s.id===c.storeId);
    const prod=store?.products.find(p=>p.id===c.productId);
    if(!store||!prod) return null;
    const disc=prod.discount&&!isExpired(prod.discount.expiryDate);
    const price=disc?prod.originalPrice*(1-prod.discount.percent/100):prod.originalPrice;
    return {key:`${c.storeId}:${c.productId}`,storeId:c.storeId,productId:c.productId,
      storeName:store.name,name:prod.name[lang]||prod.name.uz,photo:prod.photos?.[0],
      logo:store.logo,color:store.color,price,qty:c.qty,delivery:prod.delivery,deliveryPrice:prod.deliveryPrice};
  }).filter(Boolean);
  const cartTotal = cartDetailed.reduce((s,i)=>s+i.price*i.qty,0);
  const deliveryTotal = cartDetailed.reduce((s,i)=>s+(i.delivery?i.deliveryPrice:0),0);
  const cartCount = cartDetailed.reduce((s,i)=>s+i.qty,0);
  const unreadCount = notifications.filter(n=>!n.read).length;

  // --- actions ---
  const toggleSave = (key) => {
    setHeartAnim(key);
    setTimeout(()=>setHeartAnim(null),600);
    setSavedKeys(prev=>prev.includes(key)?prev.filter(x=>x!==key):[...prev,key]);
  };

  const addToCart = (storeId, productId) => {
    setCartAnim(true); setTimeout(()=>setCartAnim(false),500);
    setCart(prev=>{
      const ex=prev.find(c=>c.storeId===storeId&&c.productId===productId);
      if(ex) return prev.map(c=>c.storeId===storeId&&c.productId===productId?{...c,qty:c.qty+1}:c);
      return [...prev,{storeId,productId,qty:1}];
    });
  };
  const changeQty = (storeId,productId,delta) =>
    setCart(prev=>prev.map(c=>c.storeId===storeId&&c.productId===productId?{...c,qty:Math.max(1,c.qty+delta)}:c));
  const removeFromCart = (storeId,productId) =>
    setCart(prev=>prev.filter(c=>!(c.storeId===storeId&&c.productId===productId)));

  const notifySubscribers = (storeId, kind) => {
    const store=stores.find(s=>s.id===storeId); if(!store) return;
    if(subscriptions.includes(storeId)) {
      const msg=kind==="discount"?tx.newDiscountNotif(store.name):tx.newProductNotif(store.name);
      setNotifications(prev=>[{id:Date.now()+Math.random(),storeId,storeName:store.name,
        message:msg,read:false,time:new Date().toISOString()},...prev]);
    }
  };

  const getCoupon = (deal) => {
    const exists = coupons.find(c=>c.storeId===deal.storeId&&c.productId===deal.productId&&!c.used);
    if(exists) return;
    setCoupons(prev=>[...prev,{
      id:Date.now()+Math.random(), code:generateCouponCode(),
      storeId:deal.storeId, storeName:deal.storeName, productId:deal.productId,
      productName:deal.title, discount:deal.discount, expiryDate:deal.expiryDate,
      logo:deal.logo, color:deal.color, used:false,
    }]);
    setShowConfetti(true); setTimeout(()=>setShowConfetti(false),2000);
  };

  const useCoupon = (couponId) => setCoupons(prev=>prev.map(c=>c.id===couponId?{...c,used:true}:c));
  const toggleSubscribe = (storeId) =>
    setSubscriptions(prev=>prev.includes(storeId)?prev.filter(id=>id!==storeId):[...prev,storeId]);

  const createStore = ({name,logo,address,location,phone}) => {
    const id="mystore-"+Date.now();
    setStores(prev=>[...prev,{id,name,logo,color:"#E63946",address,phone,
      lat:location?.lat||41.299,lng:location?.lng||69.240,views:0,subscriberBase:0,reviews:[],products:[]}]);
    setMyStoreId(id); setProfileView("main"); setViewingStoreId(id);
  };

  const addProductToStore = (storeId, p) => {
    const newProd={id:"prod-"+Date.now(),category:p.category,
      name:{uz:p.name,ru:p.name},description:{uz:p.description,ru:p.description},
      params:p.params.filter(r=>r.name&&r.value),originalPrice:parseFloat(p.originalPrice)||0,
      photos:p.photos,delivery:p.delivery,deliveryPrice:parseFloat(p.deliveryPrice)||0,
      discount:null,reviews:[]};
    setStores(prev=>prev.map(s=>{
      if(s.id!==storeId) return s;
      const up={...s,products:[newProd,...s.products]};
      if(p.address) up.address=p.address;
      if(p.location){up.lat=p.location.lat;up.lng=p.location.lng;}
      return up;
    }));
    notifySubscribers(storeId,"product");
    setProfileView("main");
  };

  const applyDiscount = (storeId,productId,discount) => {
    setStores(prev=>prev.map(s=>s.id!==storeId?s:{...s,products:s.products.map(p=>p.id===productId?{...p,discount}:p)}));
    notifySubscribers(storeId,"discount");
  };
  const removeDiscount = (storeId,productId) =>
    setStores(prev=>prev.map(s=>s.id!==storeId?s:{...s,products:s.products.map(p=>p.id===productId?{...p,discount:null}:p)}));
  const deleteProduct = (storeId,productId) =>
    setStores(prev=>prev.map(s=>s.id!==storeId?s:{...s,products:s.products.filter(p=>p.id!==productId)}));
  const rateProduct = (storeId,productId,review) => {
    const author=userData.name||(lang==="uz"?"Mehmon":"Гость");
    setStores(prev=>prev.map(s=>s.id!==storeId?s:{...s,products:s.products.map(p=>p.id===productId?{...p,reviews:[...(p.reviews||[]),{...review,author}]}:p)}));
  };
  const rateStore = (storeId,review) => {
    const author=userData.name||(lang==="uz"?"Mehmon":"Гость");
    setStores(prev=>prev.map(s=>s.id!==storeId?s:{...s,reviews:[...s.reviews,{...review,author}]}));
  };

  const handleOrderSuccess = () => {
    setShowPayment(false); setCart([]);
    setOrderSuccess(true); setShowConfetti(true);
    setTimeout(()=>{setOrderSuccess(false);setShowConfetti(false);},3000);
  };

  // --- onboarding ---
  if(step<5&&!isGuest) return (
    <div style={{maxWidth:430,margin:"0 auto",fontFamily:"'Segoe UI',sans-serif"}}>
      <OnboardingStep step={step} setStep={setStep} lang={lang} setLang={setLang}
        dark={dark} userData={userData} setUserData={setUserData} onGuest={()=>setIsGuest(true)}/>
    </div>
  );

  // --- store view overlay ---
  if(viewingStore) {
    const isOwner=viewingStore.id===myStoreId;
    return (
      <div style={{fontFamily:"'Segoe UI',sans-serif",maxWidth:430,margin:"0 auto"}}>
        <StoreView lang={lang} dark={dark} store={viewingStore} isOwner={isOwner} coupons={coupons}
          isSubscribed={subscriptions.includes(viewingStore.id)}
          onBack={()=>setViewingStoreId(null)}
          onSubscribeToggle={()=>toggleSubscribe(viewingStore.id)}
          onAddProduct={()=>setProfileView("storeAddProduct")}
          onApplyDiscount={(pid,d)=>applyDiscount(viewingStore.id,pid,d)}
          onRemoveDiscount={pid=>removeDiscount(viewingStore.id,pid)}
          onDeleteProduct={pid=>deleteProduct(viewingStore.id,pid)}
          onRateProduct={(pid,r)=>rateProduct(viewingStore.id,pid,r)}
          onRateStore={r=>rateStore(viewingStore.id,r)}
          onOpenDeal={(sid,pid)=>{setSelectedKey({storeId:sid,productId:pid});setViewingStoreId(null);}}/>
        {profileView==="storeAddProduct"&&(
          <div style={{position:"fixed",inset:0,zIndex:250,maxWidth:430,margin:"0 auto",background:th.bg}}>
            <AddProductForm lang={lang} dark={dark} store={viewingStore}
              onCancel={()=>setProfileView("main")}
              onSubmit={p=>{addProductToStore(viewingStore.id,p);setProfileView("main");}}/>
          </div>
        )}
      </div>
    );
  }
  if(activeTab==="profile"&&profileView==="createStore") return (
    <div style={{fontFamily:"'Segoe UI',sans-serif",maxWidth:430,margin:"0 auto"}}>
      <CreateStoreForm lang={lang} dark={dark} userData={userData} onCreate={createStore} onCancel={()=>setProfileView("main")}/>
    </div>
  );


  // =====================================================
  // MAIN SHELL RENDER
  // =====================================================
  return (
    <div style={{fontFamily:"'Segoe UI',sans-serif",background:th.bg,minHeight:"100vh",
      maxWidth:430,margin:"0 auto",position:"relative",paddingBottom:85}}>
      <Confetti active={showConfetti}/>
      <style>{`
        @keyframes heartPop{0%{transform:scale(1)}40%{transform:scale(1.5)}100%{transform:scale(1)}}
        @keyframes cartBounce{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}
        @keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:none;opacity:1}}
      `}</style>

      {/* ORDER SUCCESS */}
      {orderSuccess&&(
        <div style={{position:"fixed",inset:0,zIndex:500,display:"flex",alignItems:"center",
          justifyContent:"center",background:"rgba(0,0,0,0.5)"}}>
          <div style={{background:th.card,borderRadius:24,padding:36,textAlign:"center",
            maxWidth:300,animation:"slideUp 0.3s ease",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}>
            <div style={{fontSize:64,marginBottom:16}}>🎉</div>
            <h3 style={{color:th.text,fontSize:20,fontWeight:800,margin:"0 0 8px"}}>{tx.orderSuccess}</h3>
            <p style={{color:th.sub,fontSize:14,margin:0}}>{tx.orderSuccessDesc}</p>
          </div>
        </div>
      )}

      {/* PAYMENT MODAL */}
      {showPayment&&(
        <PaymentModal lang={lang} dark={dark} total={cartTotal+deliveryTotal}
          onClose={()=>setShowPayment(false)} onSuccess={handleOrderSuccess}/>
      )}

      {/* DEAL MODAL */}
      {selectedDeal&&(
        <ModalSheet onClose={()=>setSelectedKey(null)} dark={dark} maxHeight="92vh">
          {selectedDeal.photos?.length
            ? <div style={{display:"flex",gap:8,overflowX:"auto",marginBottom:16}}>
                {selectedDeal.photos.map((src,i)=><img key={i} src={src} alt="" style={{width:110,height:110,borderRadius:14,objectFit:"cover",flexShrink:0}}/>)}
              </div>
            : <div style={{fontSize:56,textAlign:"center",marginBottom:12}}>{selectedDeal.logo}</div>
          }
          <h2 style={{textAlign:"center",fontSize:22,fontWeight:700,color:th.text,marginBottom:4}}>{selectedDeal.storeName}</h2>
          <p style={{textAlign:"center",color:th.sub,marginBottom:10}}>{selectedDeal.title[lang]}</p>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:6,marginBottom:14}}>
            <StarRating value={Math.round(avgRating(selectedDeal.reviews))} readOnly size={15}/>
            <span style={{fontSize:12,color:"#AAA"}}>({selectedDeal.reviews.length})</span>
          </div>
          {selectedDeal.description?.[lang]&&(
            <p style={{color:th.sub,fontSize:13,lineHeight:1.6,marginBottom:16,
              background:th.card2,borderRadius:12,padding:14}}>{selectedDeal.description[lang]}</p>
          )}
          {selectedDeal.params?.length>0&&(
            <div style={{marginBottom:16}}>
              {selectedDeal.params.map((p,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",
                  borderBottom:i<selectedDeal.params.length-1?`1px solid ${th.border}`:"none"}}>
                  <span style={{color:th.sub,fontSize:13}}>{p.name}</span>
                  <span style={{color:th.text,fontSize:13,fontWeight:600}}>{p.value}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{background:selectedDeal.color+"15",borderRadius:16,padding:20,textAlign:"center",marginBottom:16}}>
            <div style={{fontSize:56,fontWeight:900,color:selectedDeal.color,lineHeight:1}}>{selectedDeal.discount}%</div>
            <div style={{color:selectedDeal.color,fontWeight:600,marginTop:4}}>{tx.discount}</div>
            {selectedDeal.originalPrice>0&&(
              <div style={{marginTop:10,fontSize:13,color:th.sub}}>
                <span style={{textDecoration:"line-through"}}>{formatPrice(selectedDeal.originalPrice)} {tx.sumShort}</span>
                {" → "}
                <b style={{color:th.text}}>{formatPrice(selectedDeal.originalPrice*(1-selectedDeal.discount/100))} {tx.sumShort}</b>
              </div>
            )}
          </div>
          {selectedDeal.delivery&&(
            <div style={{background:"#00B89415",borderRadius:12,padding:"10px 16px",
              marginBottom:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:13,color:"#00B894",fontWeight:600}}>🚚 {tx.deliveryAvail}</span>
              <span style={{fontSize:13,color:"#00B894",fontWeight:700}}>{formatPrice(selectedDeal.deliveryPrice)} {tx.sumShort}</span>
            </div>
          )}
          {[
            {label:tx.expires,value:daysLeftLabel(selectedDeal.expiryDate,lang)},
            ...(selectedDeal.storeAddress?[{label:"📍",value:selectedDeal.storeAddress}]:[]),
            ...(selectedDeal.storePhone?[{label:"📞",value:selectedDeal.storePhone}]:[]),
          ].map((row,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",marginBottom:8,
              padding:"10px 14px",background:th.card2,borderRadius:12,gap:12}}>
              <span style={{color:th.sub,flexShrink:0}}>{row.label}:</span>
              <span style={{fontWeight:600,color:th.text,textAlign:"right"}}>{row.value}</span>
            </div>
          ))}
          <div style={{display:"flex",gap:10,marginTop:8}}>
            <button onClick={()=>addToCart(selectedDeal.storeId,selectedDeal.productId)}
              style={{...s.btn,flex:2,marginBottom:0}}>{tx.addToCart}</button>
            <button onClick={()=>getCoupon(selectedDeal)} style={{...s.ghostBtn,flex:1,marginBottom:0}}>🎟️</button>
          </div>
          <button onClick={()=>{setViewingStoreId(selectedDeal.storeId);setSelectedKey(null);}}
            style={{...s.ghostBtn,marginTop:10}}>{tx.goToStore}</button>
        </ModalSheet>
      )}


      {/* HOME TAB */}
      {activeTab==="home"&&<>
        <div style={{background:"linear-gradient(135deg,#E63946 0%,#C1121F 100%)",padding:"48px 20px 24px",color:"#fff"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div>
              <p style={{margin:0,opacity:0.85,fontSize:13}}>{tx.greeting}</p>
              <h1 style={{margin:0,fontSize:22,fontWeight:900,letterSpacing:-0.5}}>
                {isGuest?"👁️ Mehmon":(userData.name||tx.appName)}
              </h1>
            </div>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              <div style={{display:"flex",background:"rgba(255,255,255,0.2)",borderRadius:20,padding:3}}>
                {["uz","ru"].map(l=>(
                  <button key={l} onClick={()=>setLang(l)} style={{padding:"4px 10px",borderRadius:16,
                    border:"none",background:lang===l?"#fff":"transparent",
                    color:lang===l?"#E63946":"#fff",fontWeight:700,fontSize:11,cursor:"pointer"}}>{l.toUpperCase()}</button>
                ))}
              </div>
              <button onClick={()=>{setActiveTab("profile");setProfileView("notifications");}}
                style={{background:"rgba(255,255,255,0.2)",border:"none",borderRadius:12,
                  padding:"6px 12px",fontSize:12,fontWeight:600,cursor:"pointer",color:"#fff"}}>
                🔔 {unreadCount>0&&<span style={{background:"#fff",color:"#E63946",borderRadius:6,
                  padding:"0 4px",fontSize:10,fontWeight:800,marginLeft:2}}>{unreadCount}</span>}
              </button>
              <button onClick={()=>setActiveTab("cart")} style={{position:"relative",
                background:cartAnim?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.2)",border:"none",
                borderRadius:12,padding:"6px 12px",fontSize:12,fontWeight:600,cursor:"pointer",color:"#fff",
                animation:cartAnim?"cartBounce 0.4s ease":undefined}}>
                🛒
                {cartCount>0&&<span style={{position:"absolute",top:-6,right:-6,background:"#fff",
                  color:"#E63946",borderRadius:8,fontSize:10,fontWeight:800,padding:"1px 5px"}}>{cartCount}</span>}
              </button>
            </div>
          </div>
          <div style={{background:"rgba(255,255,255,0.15)",borderRadius:16,padding:"14px 18px",
            display:"flex",alignItems:"center",gap:14}}>
            <div style={{fontSize:44,fontWeight:900,color:"rgba(255,255,255,0.3)",lineHeight:1}}>%</div>
            <div>
              <div style={{fontSize:15,fontWeight:700}}>
                {lang==="uz"?`Bugun ${activeDeals.length} ta taklif`:`Сегодня ${activeDeals.length} акций`}
              </div>
              <div style={{fontSize:12,opacity:0.8}}>
                {lang==="uz"?"Eng yaxshi chegirmalar siz uchun":"Лучшие скидки для вас"}
              </div>
            </div>
            <button onClick={toggleDark} style={{marginLeft:"auto",background:"rgba(255,255,255,0.2)",
              border:"none",borderRadius:10,padding:"6px 10px",color:"#fff",cursor:"pointer",fontSize:16}}>
              {dark?"☀️":"🌙"}
            </button>
          </div>
        </div>

        <div style={{padding:"16px 20px 0"}}>
          <div style={{position:"relative"}}>
            <span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:16}}>🔍</span>
            <input placeholder={tx.search} value={search} onChange={e=>setSearch(e.target.value)}
              style={{width:"100%",padding:"13px 14px 13px 42px",borderRadius:14,
                border:`1.5px solid ${th.border}`,background:th.card,fontSize:14,
                outline:"none",boxSizing:"border-box",color:th.text,
                boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}/>
          </div>
        </div>

        <div style={{padding:"12px 0 0 20px",display:"flex",gap:10,overflowX:"auto",scrollbarWidth:"none"}}>
          {browseCategories(lang).map(cat=>(
            <button key={cat.id} onClick={()=>setActiveCategory(cat.id)} style={{flexShrink:0,
              padding:"8px 16px",borderRadius:50,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,
              background:activeCategory===cat.id?"#E63946":th.card,
              color:activeCategory===cat.id?"#fff":th.sub,
              boxShadow:"0 2px 6px rgba(0,0,0,0.08)"}}>
              {cat.emoji} {cat.label}
            </button>
          ))}
          <div style={{width:20,flexShrink:0}}/>
        </div>

        <SortFilterBar lang={lang} sort={sort} setSort={setSort} dark={dark}/>

        <div style={{padding:"14px 20px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <h2 style={{margin:0,fontSize:16,fontWeight:700,color:th.text}}>{tx.offers}</h2>
            <span style={{fontSize:13,color:th.sub}}>{filtered.length} ta</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            {filtered.map(deal=>(
              <div key={deal.key} style={{background:th.card,borderRadius:18,overflow:"hidden",
                boxShadow:"0 2px 12px rgba(0,0,0,0.07)"}}>
                <div onClick={()=>setSelectedKey({storeId:deal.storeId,productId:deal.productId})}
                  style={{background:deal.color+"18",padding:"18px 16px 12px",position:"relative",
                    minHeight:60,cursor:"pointer"}}>
                  {deal.photos?.length
                    ? <img src={deal.photos[0]} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
                    : <div style={{fontSize:36}}>{deal.logo}</div>
                  }
                  <div style={{position:"absolute",top:12,right:12,background:deal.color,color:"#fff",
                    borderRadius:8,padding:"3px 8px",fontSize:13,fontWeight:800}}>-{deal.discount}%</div>
                  {deal.delivery&&<div style={{position:"absolute",top:12,left:10,background:"#00B894",
                    color:"#fff",borderRadius:8,padding:"2px 6px",fontSize:10,fontWeight:700}}>🚚</div>}
                  <button onClick={e=>{e.stopPropagation();toggleSave(deal.key);}}
                    style={{position:"absolute",bottom:10,right:12,background:"none",border:"none",
                      fontSize:18,cursor:"pointer",
                      animation:heartAnim===deal.key?"heartPop 0.6s ease":undefined}}>
                    {savedKeys.includes(deal.key)?"❤️":"🤍"}
                  </button>
                </div>
                <div onClick={()=>setSelectedKey({storeId:deal.storeId,productId:deal.productId})}
                  style={{padding:"10px 12px 4px",cursor:"pointer"}}>
                  <div style={{fontSize:13,fontWeight:700,color:th.text,marginBottom:2}}>{deal.storeName}</div>
                  <div style={{fontSize:11,color:th.sub,marginBottom:4}}>{deal.title[lang]}</div>
                  <div style={{fontSize:10,color:th.sub,fontWeight:600}}>⏰ {daysLeftLabel(deal.expiryDate,lang)} {tx.left}</div>
                </div>
                <div style={{padding:"0 12px 12px"}}>
                  <button onClick={()=>setViewingStoreId(deal.storeId)} style={{width:"100%",padding:"7px",
                    borderRadius:9,border:`1.5px solid ${th.border}`,background:th.card,
                    color:th.sub,fontWeight:700,fontSize:11,cursor:"pointer"}}>{tx.goToStore}</button>
                </div>
              </div>
            ))}
          </div>
          {filtered.length===0&&(
            <div style={{textAlign:"center",padding:"40px 0",color:"#AAA"}}>
              <div style={{fontSize:48,marginBottom:12}}>🔍</div>
              <div style={{fontWeight:600,color:th.sub}}>{tx.noDeals}</div>
              <div style={{fontSize:13,marginTop:4,color:th.sub}}>{tx.noDealsDesc}</div>
            </div>
          )}
        </div>
      </>}


      {/* SAVED TAB */}
      {activeTab==="saved"&&(
        <div style={{padding:"48px 20px 20px",background:th.bg,minHeight:"100vh"}}>
          <h2 style={{fontSize:22,fontWeight:800,color:th.text,marginBottom:20}}>{tx.savedTitle}</h2>
          {savedList.length===0
            ? <div style={{textAlign:"center",padding:"60px 0"}}>
                <div style={{fontSize:56,marginBottom:12}}>🤍</div>
                <div style={{fontWeight:600,fontSize:16,color:th.sub}}>{tx.nothingSaved}</div>
                <div style={{fontSize:13,marginTop:6,color:th.sub}}>{tx.nothingSavedDesc}</div>
              </div>
            : savedList.map(deal=>(
                <div key={deal.key} onClick={()=>setSelectedKey({storeId:deal.storeId,productId:deal.productId})}
                  style={{background:th.card,borderRadius:16,padding:16,marginBottom:12,
                    display:"flex",alignItems:"center",gap:14,
                    boxShadow:"0 2px 8px rgba(0,0,0,0.06)",cursor:"pointer"}}>
                  <div style={{background:deal.color+"18",borderRadius:12,width:52,height:52,
                    display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,
                    flexShrink:0,overflow:"hidden"}}>
                    {deal.photos?.length?<img src={deal.photos[0]} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:deal.logo}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:14,color:th.text}}>{deal.storeName}</div>
                    <div style={{fontSize:12,color:th.sub}}>{deal.title[lang]}</div>
                  </div>
                  <div style={{background:deal.color,color:"#fff",borderRadius:10,
                    padding:"6px 12px",fontWeight:800,fontSize:15}}>-{deal.discount}%</div>
                </div>
              ))
          }
        </div>
      )}

      {/* CART TAB */}
      {activeTab==="cart"&&(
        <div style={{padding:"48px 20px 20px",background:th.bg,minHeight:"100vh"}}>
          <h2 style={{fontSize:22,fontWeight:800,color:th.text,marginBottom:20}}>{tx.cartTitle}</h2>
          {cartDetailed.length===0
            ? <div style={{textAlign:"center",padding:"60px 0"}}>
                <div style={{fontSize:56,marginBottom:12}}>🛒</div>
                <div style={{fontWeight:600,fontSize:16,color:th.sub}}>{tx.emptyCart}</div>
                <div style={{fontSize:13,marginTop:6,color:th.sub}}>{tx.emptyCartDesc}</div>
              </div>
            : <>
                {cartDetailed.map(item=>(
                  <div key={item.key} style={{background:th.card,borderRadius:16,padding:14,
                    marginBottom:12,display:"flex",alignItems:"center",gap:12,
                    boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                    <div style={{background:item.color+"18",borderRadius:12,width:56,height:56,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:26,flexShrink:0,overflow:"hidden"}}>
                      {item.photo?<img src={item.photo} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:item.logo}
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontWeight:700,fontSize:13,color:th.text}}>{item.name}</div>
                      <div style={{fontSize:11,color:th.sub,marginBottom:4}}>{item.storeName}</div>
                      <div style={{fontWeight:800,fontSize:13,color:"#E63946"}}>{formatPrice(item.price)} {tx.sumShort}</div>
                      {item.delivery&&<div style={{fontSize:10,color:"#00B894",fontWeight:600}}>🚚 +{formatPrice(item.deliveryPrice)} {tx.sumShort}</div>}
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8}}>
                      <button onClick={()=>removeFromCart(item.storeId,item.productId)}
                        style={{background:"none",border:"none",color:"#CCC",fontSize:14,cursor:"pointer"}}>✕</button>
                      <div style={{display:"flex",alignItems:"center",gap:8,background:th.card2,
                        borderRadius:10,padding:"4px 8px",border:`1px solid ${th.border}`}}>
                        <button onClick={()=>changeQty(item.storeId,item.productId,-1)}
                          style={{background:"none",border:"none",fontSize:15,fontWeight:800,cursor:"pointer",color:th.text}}>−</button>
                        <span style={{fontSize:13,fontWeight:700,minWidth:14,textAlign:"center",color:th.text}}>{item.qty}</span>
                        <button onClick={()=>changeQty(item.storeId,item.productId,1)}
                          style={{background:"none",border:"none",fontSize:15,fontWeight:800,cursor:"pointer",color:th.text}}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{background:th.card,borderRadius:16,padding:18,marginTop:8,
                  boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:`1px solid ${th.border}`}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                    <span style={{color:th.sub}}>{tx.total}</span>
                    <span style={{fontWeight:700,color:th.text}}>{formatPrice(cartTotal)} {tx.sumShort}</span>
                  </div>
                  {deliveryTotal>0&&(
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                      <span style={{color:"#00B894",fontSize:13}}>🚚 Yetkazib berish</span>
                      <span style={{fontWeight:700,color:"#00B894",fontSize:13}}>{formatPrice(deliveryTotal)} {tx.sumShort}</span>
                    </div>
                  )}
                  <div style={{height:1,background:th.border,margin:"8px 0"}}/>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <span style={{fontWeight:800,color:th.text,fontSize:16}}>Jami</span>
                    <span style={{fontWeight:900,fontSize:20,color:"#E63946"}}>{formatPrice(cartTotal+deliveryTotal)} {tx.sumShort}</span>
                  </div>
                </div>
                <button onClick={()=>setShowPayment(true)} style={{...s.btn,marginTop:14}}>
                  {tx.checkout} →
                </button>
              </>
          }
        </div>
      )}

      {/* MAP TAB */}
      {activeTab==="map"&&(
        <MapView lang={lang} dark={dark} deals={activeDeals}
          onDealClick={d=>setSelectedKey({storeId:d.storeId,productId:d.productId})}/>
      )}


      {/* PROFILE TAB */}
      {activeTab==="profile"&&profileView==="main"&&(
        <div style={{padding:"48px 20px 20px",background:th.bg,minHeight:"100vh"}}>
          <div style={{textAlign:"center",marginBottom:28}}>
            <div style={{width:80,height:80,background:"linear-gradient(135deg,#E63946,#C1121F)",
              borderRadius:40,display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:36,margin:"0 auto 12px"}}>
              {isGuest?"👁️":(userData.photo?"😊":"👤")}
            </div>
            <h2 style={{margin:0,fontSize:20,fontWeight:800,color:th.text}}>
              {isGuest?(lang==="uz"?"Mehmon foydalanuvchi":"Гость"):(`${userData.name} ${userData.surname}`)}
            </h2>
            <p style={{color:th.sub,fontSize:13,margin:"4px 0 0"}}>{userData.phone}</p>
          </div>

          {/* Dark mode toggle */}
          <div onClick={toggleDark} style={{background:th.card,borderRadius:14,padding:"16px 18px",
            marginBottom:10,display:"flex",alignItems:"center",gap:14,
            boxShadow:"0 1px 6px rgba(0,0,0,0.05)",cursor:"pointer",
            border:`1px solid ${th.border}`}}>
            <span style={{fontSize:22}}>{dark?"☀️":"🌙"}</span>
            <span style={{flex:1,fontWeight:600,fontSize:14,color:th.text}}>{tx.darkMode}</span>
            <div style={{width:44,height:24,borderRadius:12,background:dark?"#E63946":"#E0E0E0",
              position:"relative",transition:"background 0.3s"}}>
              <div style={{position:"absolute",top:3,left:dark?20:3,width:18,height:18,
                borderRadius:9,background:"#fff",transition:"left 0.3s",
                boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}}/>
            </div>
          </div>

          {!isGuest&&(
            <button onClick={()=>myStore?setViewingStoreId(myStore.id):setProfileView("createStore")}
              style={{width:"100%",display:"flex",alignItems:"center",gap:14,textAlign:"left",
                background:"linear-gradient(135deg,#E63946 0%,#C1121F 100%)",border:"none",
                borderRadius:16,padding:"16px 18px",marginBottom:10,cursor:"pointer",
                boxShadow:"0 4px 16px rgba(230,57,70,0.25)"}}>
              <span style={{fontSize:26}}>{myStore?myStore.logo:"🏪"}</span>
              <span style={{flex:1}}>
                <span style={{display:"block",fontWeight:800,fontSize:15,color:"#fff"}}>
                  {myStore?myStore.name:tx.myStore}
                </span>
                <span style={{display:"block",fontWeight:500,fontSize:11,color:"rgba(255,255,255,0.85)",marginTop:2}}>
                  {myStore?`${myStore.products.length} ${tx.productsInStore.toLowerCase()}`:tx.createStoreSub}
                </span>
              </span>
              <span style={{color:"#fff",fontSize:18}}>›</span>
            </button>
          )}

          {[
            {icon:"🎟️",label:tx.myCoupons,count:coupons.filter(c=>!c.used).length||"",action:()=>setProfileView("coupons")},
            {icon:"❤️",label:tx.savedTitle,count:savedKeys.length||"",action:()=>setActiveTab("saved")},
            {icon:"🛒",label:tx.cart,count:cartCount||"",action:()=>setActiveTab("cart")},
            {icon:"🔔",label:tx.notifications,count:unreadCount||"",action:()=>setProfileView("notifications")},
            {icon:"🏪",label:tx.subscribedStores,count:subscriptions.length||"",action:()=>setProfileView("subscribed")},
            {icon:"⚙️",label:tx.settings,count:""},
          ].map((item,i)=>(
            <div key={i} onClick={item.action} style={{background:th.card,borderRadius:14,
              padding:"16px 18px",marginBottom:10,display:"flex",alignItems:"center",gap:14,
              boxShadow:"0 1px 6px rgba(0,0,0,0.05)",cursor:"pointer",
              border:`1px solid ${th.border}`}}>
              <span style={{fontSize:22}}>{item.icon}</span>
              <span style={{flex:1,fontWeight:600,fontSize:14,color:th.text}}>{item.label}</span>
              {item.count!=""&&<span style={{background:"#E63946",color:"#fff",borderRadius:8,
                padding:"2px 8px",fontSize:12,fontWeight:700}}>{item.count}</span>}
              <span style={{color:"#CCC"}}>›</span>
            </div>
          ))}

          <button onClick={()=>{if(isGuest){setIsGuest(false);setStep(0);}else{setStep(0);setUserData({name:"",surname:"",phone:"",photo:""});}}}
            style={{width:"100%",padding:"14px",background:th.card,color:"#E63946",
              border:"1.5px solid #E63946",borderRadius:14,fontSize:15,fontWeight:700,cursor:"pointer",marginTop:10}}>
            {lang==="uz"?"Chiqish":"Выйти"}
          </button>
        </div>
      )}

      {/* COUPONS VIEW */}
      {activeTab==="profile"&&profileView==="coupons"&&(
        <div style={{padding:"48px 20px 20px",background:th.bg,minHeight:"100vh"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <button onClick={()=>setProfileView("main")} style={{background:th.card,
              border:`1.5px solid ${th.border}`,borderRadius:10,width:34,height:34,
              fontSize:16,cursor:"pointer",color:th.text}}>←</button>
            <h2 style={{fontSize:20,fontWeight:800,color:th.text,margin:0}}>🎟️ {tx.myCoupons}</h2>
          </div>
          {coupons.length===0
            ? <div style={{textAlign:"center",padding:"60px 0"}}>
                <div style={{fontSize:56,marginBottom:12}}>🎟️</div>
                <div style={{fontWeight:600,color:th.sub}}>
                  {lang==="uz"?"Kuponlar yo'q":"Купонов нет"}
                </div>
                <div style={{fontSize:13,marginTop:6,color:th.sub}}>
                  {lang==="uz"?"Chegirmali mahsulotdan kupon oling":"Получите купон из скидочного товара"}
                </div>
              </div>
            : coupons.map(c=><CouponCard key={c.id} coupon={c} lang={lang} dark={dark} onUse={useCoupon}/>)
          }
        </div>
      )}

      {/* SUBSCRIBED STORES */}
      {activeTab==="profile"&&profileView==="subscribed"&&(
        <div style={{padding:"48px 20px 20px",background:th.bg,minHeight:"100vh"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <button onClick={()=>setProfileView("main")} style={{background:th.card,
              border:`1.5px solid ${th.border}`,borderRadius:10,width:34,height:34,
              fontSize:16,cursor:"pointer",color:th.text}}>←</button>
            <h2 style={{fontSize:20,fontWeight:800,color:th.text,margin:0}}>🏪 {tx.subscribedStores}</h2>
          </div>
          {subscriptions.length===0
            ? <div style={{textAlign:"center",padding:"60px 0"}}>
                <div style={{fontSize:56,marginBottom:12}}>🔔</div>
                <div style={{fontWeight:600,color:th.sub}}>{tx.noSubscribed}</div>
              </div>
            : subscriptions.map(sid=>{
                const store=stores.find(s=>s.id===sid); if(!store) return null;
                return (
                  <div key={sid} onClick={()=>setViewingStoreId(sid)} style={{background:th.card,
                    borderRadius:16,padding:16,marginBottom:12,display:"flex",alignItems:"center",
                    gap:14,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",cursor:"pointer"}}>
                    <div style={{width:48,height:48,borderRadius:14,background:store.color+"20",
                      display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>
                      {store.logo}
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:700,fontSize:14,color:th.text}}>{store.name}</div>
                      <div style={{fontSize:12,color:th.sub}}>📍 {store.address}</div>
                    </div>
                    <button onClick={e=>{e.stopPropagation();toggleSubscribe(sid);}}
                      style={{background:"#FFF0F0",border:"none",borderRadius:10,padding:"6px 12px",
                        color:"#E63946",fontSize:12,fontWeight:700,cursor:"pointer"}}>✕</button>
                  </div>
                );
              })
          }
        </div>
      )}

      {/* NOTIFICATIONS VIEW */}
      {activeTab==="profile"&&profileView==="notifications"&&(
        <div style={{padding:"48px 20px 20px",background:th.bg,minHeight:"100vh"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <button onClick={()=>setProfileView("main")} style={{background:th.card,
              border:`1.5px solid ${th.border}`,borderRadius:10,width:34,height:34,
              fontSize:16,cursor:"pointer",color:th.text}}>←</button>
            <h2 style={{fontSize:20,fontWeight:800,color:th.text,margin:0}}>{tx.notificationsTitle}</h2>
          </div>
          {notifications.length===0
            ? <div style={{textAlign:"center",padding:"60px 0"}}>
                <div style={{fontSize:56,marginBottom:12}}>🔔</div>
                <div style={{fontWeight:600,fontSize:16,color:th.sub}}>{tx.noNotifications}</div>
                <div style={{fontSize:13,marginTop:6,color:th.sub}}>{tx.noNotificationsDesc}</div>
              </div>
            : notifications.map(n=>(
                <div key={n.id} onClick={()=>{
                    setNotifications(prev=>prev.map(x=>x.id===n.id?{...x,read:true}:x));
                    setViewingStoreId(n.storeId); setActiveTab("profile");
                  }} style={{background:n.read?th.card:"#FFF0F0",borderRadius:14,padding:14,marginBottom:10,
                    display:"flex",gap:12,alignItems:"center",
                    boxShadow:"0 1px 6px rgba(0,0,0,0.05)",cursor:"pointer",
                    border:n.read?`1px solid ${th.border}`:"1px solid #E6394622"}}>
                  <span style={{fontSize:20}}>🔔</span>
                  <span style={{flex:1,fontSize:13,color:th.text,fontWeight:n.read?500:700}}>{n.message}</span>
                  {!n.read&&<span style={{width:8,height:8,borderRadius:4,background:"#E63946",flexShrink:0}}/>}
                </div>
              ))
          }
        </div>
      )}

      {/* FOOTER NAV */}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",
        maxWidth:430,background:th.card,borderTop:`1px solid ${th.border}`,display:"flex",
        padding:"10px 0 20px",boxShadow:"0 -4px 20px rgba(0,0,0,0.08)",zIndex:100}}>
        {[
          {id:"home",icon:"🏠",label:tx.home},
          {id:"saved",icon:"❤️",label:tx.saved},
          {id:"cart",icon:"🛒",label:tx.cart,badge:cartCount},
          {id:"map",icon:"🗺️",label:tx.map},
          {id:"profile",icon:"👤",label:tx.profile,badge:unreadCount},
        ].map(tab=>(
          <button key={tab.id} onClick={()=>{setActiveTab(tab.id);if(tab.id!=="profile")setProfileView("main");}}
            style={{position:"relative",flex:1,background:"none",border:"none",cursor:"pointer",
              display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"4px 0"}}>
            <span style={{fontSize:21,position:"relative"}}>
              {tab.icon}
              {tab.badge>0&&<span style={{position:"absolute",top:-6,right:-10,background:"#E63946",
                color:"#fff",borderRadius:7,fontSize:9,fontWeight:800,padding:"1px 4px"}}>{tab.badge}</span>}
            </span>
            <span style={{fontSize:10,fontWeight:600,color:activeTab===tab.id?"#E63946":th.sub}}>{tab.label}</span>
            {activeTab===tab.id&&<div style={{width:4,height:4,borderRadius:2,background:"#E63946"}}/>}
          </button>
        ))}
      </div>
    </div>
  );
}
