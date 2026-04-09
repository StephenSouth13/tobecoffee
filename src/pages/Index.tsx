import { Link } from "react-router-dom";
import { Leaf, Coffee, Wind, Snowflake, Filter, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-coffee-field.jpg";
import aboutImg from "@/assets/about-pourover.jpg";
import statsBg from "@/assets/stats-bg.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const categories = [
  { icon: Leaf, title: "Cà phê nhân xanh", desc: "Green coffee beans" },
  { icon: Coffee, title: "Cà phê hạt rang", desc: "Roasted coffee beans" },
  { icon: Wind, title: "Cà phê bột", desc: "Ground coffee" },
  { icon: Snowflake, title: "Cà phê ủ lạnh", desc: "Cold brew coffee" },
  { icon: Filter, title: "Cà phê túi lọc", desc: "Drip-bag coffee" },
  { icon: Zap, title: "Cà phê hoà tan", desc: "Instant coffee" },
];

const stats = [
  { number: "600+", label: "Nông hộ liên kết sản xuất, kinh doanh và trồng trọn bền vững" },
  { number: "2000+", label: "Trang xay nguyên nhất được sản xuất mỗi ngày" },
  { number: "450+", label: "Bộ bao chuỗi cửa hàng nhượng quyền sản và dịch vụ thương" },
];

const blogPosts = [
  { img: blog1, title: "Hành trình khám phá vùng cà phê Đắk Lắk cùng TOBE", excerpt: "Theo chân đội ngũ TOBE đến tận vườn cà phê để tuyển chọn những hạt tốt nhất từ vùng cao nguyên..." },
  { img: blog2, title: "Nghệ thuật pha cà phê: Bí quyết từ chuyên gia TOBE", excerpt: "Chia sẻ những bí quyết pha chế đơn giản để có tách cà phê hoàn hảo tại nhà..." },
  { img: blog3, title: "TOBE ra mắt dòng sản phẩm Premium mới", excerpt: "Dòng cà phê cao cấp mới với hương vị độc đáo, đánh dấu bước phát triển mới..." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Cánh đồng cà phê Việt Nam"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tight mb-6 animate-fade-in">
          BREW BOLD. BE TOBE.
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Hương vị cà phê đậm đà từ cao nguyên Việt Nam
        </p>
        <Link
          to="/product"
          className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-sm uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
        >
          Khám phá sản phẩm
        </Link>
      </div>
    </section>

    {/* About - Split screen */}
    <section className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden">
          <img
            src={aboutImg}
            alt="Pha cà phê pour-over"
            className="w-full h-[400px] lg:h-[500px] object-cover"
            loading="lazy"
            width={960}
            height={1080}
          />
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">Về chúng tôi</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Coffee Is In Our Blood!
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-5">
            Chúng tôi tìm đến xung quanh cà phê, sẽn đổi suối hoa hai mặt bà. Bạn có thể và công chúng tôi tôi được nguồn gốc trong rất Tây Nguyên quả hương, nước rừng đời là Nối Trong không Bạn, và không có phần quan trọng nhất là Việt Nam.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Tại TOBE chúng tôi tập trung mọi nguồn lực và đam mê để hướng đến chế biến sâu cà phê Việt Nam. Mang đến thị trường sản phẩm cà phê hảo hạng — tiện lợi và ngon thuần khiết.
          </p>
          <Link
            to="/story"
            className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
          >
            Xem thêm về chúng tôi
          </Link>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Danh mục sản phẩm
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Đa dạng dòng sản phẩm cà phê chất lượng cao từ TOBE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to="/product"
              className="group bg-card rounded-sm p-8 text-center hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
            >
              <cat.icon className="mx-auto mb-4 text-primary" size={40} strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-bold mb-1">{cat.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative py-24 overflow-hidden">
      <img
        src={statsBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((s) => (
            <div key={s.number}>
              <p className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
                {s.number}
              </p>
              <p className="font-body text-primary-foreground/80 text-sm leading-relaxed max-w-xs mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Blog preview - Góc lắng đọng */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-12 italic">
          Góc lắng đọng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden mb-5">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2 leading-snug">{post.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
              <Link to="/blog" className="font-body text-sm text-primary font-semibold hover:underline">
                Đọc thêm →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Câu chuyện TOBE</h2>
        <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Từ những hạt cà phê chín mọng trên cao nguyên đến ly cà phê hoàn hảo trong tay bạn.
        </p>
        <Link
          to="/story"
          className="inline-block bg-primary-foreground text-foreground font-body font-semibold px-8 py-3 rounded-sm uppercase tracking-wider text-sm hover:bg-primary-foreground/90 transition-colors"
        >
          Tìm hiểu thêm
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
