"use client";
import React from "react";
import Image from "next/image";
import SectionImgText from "@/components/SectionImgText";

const AboutUs = () => {
  const feedbackData = [
    {
      avatar: "/images/avatar1.svg",
      userName: "Chị My",
      content:
        "Hài lòng với trải nghiệm tại nhà hàng chay Diệu Thiện, sẽ giới thiệu cho bạn bè",
    },
    {
      avatar: "/images/avatar1.svg",
      userName: "Chị My",
      content:
        "Hài lòng với trải nghiệm tại nhà hàng chay Diệu Thiện, sẽ giới thiệu cho bạn bè",
    },
    {
      avatar: "/images/avatar1.svg",
      userName: "Chị My",
      content:
        "Hài lòng với trải nghiệm tại nhà hàng chay Diệu Thiện, sẽ giới thiệu cho bạn bè",
    },
  ];

  return (
    <div className="about-us">
      <div className="div__banner">
        <Image
          className="banner"
          src={"/images/aboutUs-banner.svg"}
          alt={"banner"}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="banner__text">
          <p style={{ fontSize: "32px", textAlign: "center" }}>
            Ăn chay là thiện nghiệp <br />
            Phát khởi từ bi tâm <br />
            Khẩu chay ý thanh tịnh <br />
            Đạo hành yên an bình
          </p>
        </div>
      </div>

      <div className="about-us__content" style={{ backgroundColor: `#255442` }}>
        <SectionImgText
          title={"Không gian ấm cúng"}
          text={`Nhà hàng chay của chúng tôi là một không gian thanh lịch và ấm cúng, với trang trí tinh tế và sự sắp xếp hài hòa. <br /><br />
Thực đơn đa dạng và sáng tạo của chúng tôi mang lại cho thực khách trải nghiệm ẩm thực chay độc đáo và phong phú. <br /><br />
Không chỉ là nơi thưởng thức món ăn ngon và lành mạnh, nhà hàng chay của chúng tôi còn là điểm đến lý tưởng để thư giãn và thưởng thức hương vị tự nhiên.`}
          src={"/images/introduce.svg"}
          alt={"aboutUs"}
          width={0}
          height={0}
          stylesImg={{ width: "38.5%", height: "auto" }}
          stylesText={{ color: "#FFFFEC" }}
          reverse
        />

        <SectionImgText
          title={"Sứ mệnh"}
          text={`Với tâm huyết trong từng món ăn thỏa mãn cả phần nhìn và phần vị, không gian mộc mạc đậm phong vị truyền thống Việt Nam cùng sự yên bình từ Phật Giáo, Diệu Thiện mong muốn  mang lại cho quý thực khách một trải nghiệm với những cảm xúc thật an lành len lỏi từng giác quan.<br/><br/>
Từ lâu việc ăn chay đã là điều khiến cho nhiều người yêu ẩm thực e dè, chúng tôi với tất cả sự chân thành và nhiệt huyết, mong muốn mang đến một lựa chọn ăn ngon không kể chay hay mặn, cùng với đó là tâm nguyện khiến món chay trở thành điều quen thuộc trong từng bữa ăn của người Việt Nam.
`}
          src={"/images/introduce.svg"}
          alt={"aboutUs"}
          width={0}
          height={0}
          stylesImg={{ width: "38.5%", height: "auto" }}
          stylesText={{ color: "#FFFFEC" }}
        />

        <SectionImgText
          title={"Cộng sự của Diệu Thiện"}
          text={`Với một đội ngũ tận tâm cùng những cộng sự nhiệt huyết, từng chút một đều được nhân viên tại nhà Diệu Thiện trau chuốt và tỉ mẫn nhằm đem đến một trải nghiệm thưởng thức  hoàn toàn thiện lành và ấm cúng.`}
          src={"/images/introduce.svg"}
          alt={"aboutUs"}
          width={0}
          height={0}
          stylesImg={{ width: "38.5%", height: "auto" }}
          stylesText={{ color: "#FFFFEC" }}
          reverse
        />
      </div>

      <div className="feedback">
        <h1>Phản hồi từ thực khách</h1>
        <p>
          Với tinh thần lắng nghe và luôn luôn cải thiện đổi mới, chúng tôi rất
          vinh hạnh khi được đồng hành cùng các khách hàng thân yêu
        </p>
        <div
          className="three-column-container"
          style={{ padding: "0 83px", paddingTop: "44px", gap: "36px" }}
        >
          {feedbackData.map((item) => {
            return (
              <div className="feedback__content">
                <div className="text--border-tlbr">
                  <img className="avatar" src="/images/avatar1.svg" alt="avatar" sizes="70" />
                  <p className="content">{item.content}</p>
                  <p className="userName">{item.userName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
