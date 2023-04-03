import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../styles/about-section.css";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to House rent service</h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHUA0AMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEgQAAIBAwMBBQUEBQkECwAAAAECAwAEEQUSITEGE0FRYSJxgZHRFDKhsRVCksHhIyQzQ1JTYnJzBxZkgiU0RFRjg7KzwtLx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEAAgICAgICAwEAAAAAAAAAAAECERIhAzFBURMiBDNhFP/aAAwDAQACEQMRAD8ATrHUipUiYqUKK9GxEKpXYjqYJXax07AgEddBKICV13dFgDCOuglEBK2EosZAUrW2iSla2UWAPtrW2iNlaK07EQba0VqfbWitFgQbK5KVMRWiKYEJWudtSmtYoGQla5ZanK81wwoEDsDXO2p2WuStMAdlzUbLzRBWuCtAA7KKiYYohlqF1pAHo9ExvkULGVbxomMDzqCiZGqZTmuEQEdanWIHxpAbWpBg1pExx4VIEpWBwcCsFSrHurfckUWIS9obqe0gha3k7ssxDHAPGKQLrt433bs/sD6U97UREW8GR1ZvyqlrZ3ouXitrd5SuM4IGPmfSuTn5XF0jq4oJxtjxdV1Fvu3BP/Kv0rZ1LUv+8H9lfpQ1np+ss4C6ZIeP7xB++ibyw1rfuXSmUE5wsiYH41zf6Zezo+LjOf0nqOf+sH9lfpWHUdSPSc/sL9KFittXeZ4xp771AJUsvGenj6U0t9M1gxNv0wMSMDMijH40P8maF8PGAHU7/wAbg/sj6VF+mLwttFySfLaPpXVzpesAtnT3HukX60BFaXEbytcRGNkwCCQcZ91aQ/Ik32RLijWi6wgtDGzHJKAk/Cu9tSQRH7ND/pr+VSiI+Vekno4mDba5K0X3VZ3VFiAytcFKMaPFRMoppjBCgrkrip291RHmmIHZagcD1opwBUEnuoA2kXkaJiiaiF0ydejDHvqaO1kU+2re/ioyRVHEUbeR+VEJG/hXcYIOOKKjx+svyqHICGPeDg5oheRyKlSNGFSrCB0pWKyJF54FThQRXQTHhXYSlYiv9qI8wWw/xt+VK7GP+c3cmM7Uj/Nqfdo0/kICfBifwofs49vLHfyE5X+SGSp8zXnfl7kehwfrDbQYRSwIJUMOKKZQ3TJprdyWqafaTKVBCAH2TzxQ63UDgbGBPop+lea40zT+ie0tWOsXnsn+ii8P81NlgKjHtfKnXZ61tptQu5HUHda25zjqcyU0urSxXkAD4Gtnx+TL5FdFKnh9k8VS9dg7qW/XHSSP/wBIr1h4LQyIA36w/VNefdtjANQv41PtM0ZAwegUVXDGpotOw60h/mkH+mv5VKYans0H2ODj+qX8ql2ele3Z5r7F5i9K5aM0x7seVaMSmnYCpoyahaA+VOO5WuGhUCnkMTm39Kia2pq8XkKGlRvKqyAVSw460JKtMplyMZoGaNiapMKLTFsflOamEakdBVXW7u4sbABzk8daMi1i4xl7cn1BwK5Nmz4mO2ijHJj6eVQtJAp4IHoRQceuZHt27/An6Vq41q0ggkmuE2woMsXTOPgBRbGoNdjBbiJRnAPursXkY6ow+BqnN2v0J23MsyoQfbRMAemOv/7U1n2ksLtjHaXc28dNyNjHqcfSi0GKZbvtkI6vg+6pYrmGUezIp91VxLmLDF5m3EeGOPwrBfKCo+9xjcw8PhTB8Y41tA1uhGONx/Cq52WuIFsb0PNEpJjOGkA86aRXsMgaOUZB43Lwce48VU73QrexAbvnlhGMSLj8eODXHzrezo4VUaPQLu8tH0iFRdW5IUcd6vl76G0Se1F0e9uIANh+9Io/fXnpSwC5V2J+H0qaztbS7laMM20HqPH1rlwRso6o9B1LW7qw1aUaTdWOxrSMFpJQQDl+gBGcZ6HjpW9Ov7h9bSa51XMGWWWFrpNiHZkHbuPBJ454xVCvNGtYpNqu5HvH0oaLR4bi9itYjK8kobaiJuJwM4HwyfhVKn0xODS6PZDqNl3q/wA8tOv98v1rz7tdPDNr1wYZo5Mqv3HDfq+lVi+0GW0Yq1rcjH9uPH7q3o9lHFM00wlUAbQqqCTn8K0gop3Zmk0epWi/zOD/AEl/KpsUjj7S2EcSII7nCKFyVHOOPOt/712A/UuP2B9a71NHE+OV9DkrWttJG7Waf/dXH7A+tCX3bCNUX7BavI5bDCVtoA8xjOT6cU8hYSLJtrRQGvOu0Hbu/E5t9OiFsu0bpGG9kyPDw8jmkB7R69DIGi1eaQYyC7ZU4PgD6+FLNCxPY2izQ0tsD41XuyvbJNTY2uohYbvgKV+7Jxyc+Bz4H8as8snBwM07ChVcQqgz1pTd3YXgLTe7YsD7BHq3Skl13I4Mig1rFjKxcazJHhLe2kmk8QASB8hXNpfa1LKDLpxMX+VkPzJqCy7Rak8ojKW+CrHIiA6Anr8K6i7XXqD2re1f1KH61yvkN7b8h6apcwyhbvT7mFT/AFigsvxxSTtBfS3N20G/dCMFfGmJ7Y3OARa2vrw3P41Fc9pI7zi50PT5W/t+1kfHrQ52httqhKsK7eBu9B1+NONBL2tnqEsWzeoj56jkmllxLFJKXihWKM/1YJIHzJNOezEffafqCsBj+SB59azk6QQSyLhDotw4B+0HB/8ACFSPpMkK5kuggHBLxgCvULXRrJIye6zjryaT9sLCzPZbUpYIdskagBiT5r0ri+Sfs1yV0UCG2uXv5bZLiNkjhjkVhHnO4sPP/CPnRMmj3Egw8sZ/8r+NPbTS4Uj1CSNSskeh2silTghi0/P4CgdJuLl7to5H71Fgnlw3BJRSQMjw4olKRaa2xRJojxRlsQnaCfah/jSzT+z+pazdrLZvDAWQEhSVHBxxwa9O1/TVg0LUbqM4kitpHXx5Ck0r/wBnm37UvkIf/lUqUqHemxEewurvmN7wiQDcPaz6f2aXR6BqnZ3W7e6urrlEkZGjc5HAXyH9urJ2t7V6loutXoiljKxeyn8nnCHnB8znxpdqusz6v2c0/UbsqZpobj7q4GBNGAPlVVKrFGVtWTlTewRvcSzyM65y0jHP40K2kQH+pP40w0LM2maY7nJKv+GRTKcGNRshaVvJSAahWmDaKjqOlwx2Vy6RFWWJmU5bggGsGkWojUmF2JH9o/Wi9U1iCQXNgbaaOYwyD2gMfcJ558qcJCO5j9FFU5SS7BUVz9AwupIg28eLH60j1W0gSwnkgR0aMr7W4+LAcc16IY8CqVqMf/Rl974//cqoTeXY8Uyo6lO8GoShYo33xqp7xcjpmhreW0EW6eGQuHJwjbVK44HHPXNS64CNUYZ42Jx8BQa8P+r5e1zXbkcjWxhex2s0SS2MEUbbA7okrHux0xyfn45Puoq57RzGFI7E91tAGZPL05/OkjqRkA8elZGwUMp5yRjNUptdE4h765qwI3zAjPDbBz8cU60O6/SwdJZYYriMZYMxGR5iqtIUZiy+HTFd28hguVm3H2fEfKrjyNPsVBtnZzW5FyJ4WTa4dUZiVJUjnjH40LFbTkf0TNk8YxXDR3UEsi2rMI3PIVsA+hFHWEMkp2S2icj727Jz6c8VjWy4gttp01yrMFUBfFmwPdRFlYh1kmk7sJEcMGlCk+4HrVibQe2x0Xu/shXRw5kUMbdRnGN2AdxOPGkM2n3Qt1jIg3hjuc/e+lTRS60jL23jMUTwQsveAlFJBYjzwPCmnZVDDZ6kZVKgd0ef8xpNa6cyyFrh0c4wMt0ptZxGMTpbMsYmVQVL7uQfcKHH6lrbs911/tVpnZu2VtRlIeYERRohYscenQVWpu22mdprW70PSNO1K4lmjP3FHKjB3AE564zxn31U+0P2/XpIZdS+wuYvuBCwHx55oCxsZLGZp7ZLeORlIJSeROCeg2kcdPlXMoqtlfH5R6PYLe97rVpe2q290NKt4UiEofIBnwS3A55pjY9ntKsVWY3MkrujxEK4wFdcN0GT/EV55ZXmp2t1czWqWMRlijVwskin2S2CCGzn2jznwFGWur6zE2YnteBgCSeVwPgxNRJegwk/J6D2jkt7jTL2zSR1E9tJHvZCNpKkdCOetUj/AGe3wW/jRV3EwksNwGBu/iKiu9Z1xrcxsdP5BBZc5ORSHs7FfaderNBNG21Cmxk4YH5HwzSrW2aRg8aHXbLRxqup37WSMJp4jIcyqUG0gE58BjI8eeuKGj0bUG7NaLpsUBa4ME+Ax2jBlRgTnoCATQuqXep3l4VE5tk7ku8cbFl3E4XhicdDUDa7rGl3sgSVb1wwaN5yfZBHgM4/V/Pzq1b0PGtl07OaNPHounmWVQ0YlDgDdtILccH0o2/ttPjkSG41yGB2XPHiM+efSqdo3ai7tbWNJtIkuEbJfbKFDOeSwGeOfSmsna/MRR+y05Q+DToQfnms2pWycWcap2f0UJd6hFriNcLBIVQ4wx7sjFO7S1t7iNVttQt5iEBIQgkD3ZqqX3ae0ns7iFey7RPJEyhy8XskgjPC+FE2PapbbBt+y7o20KWSeNdw9+2m1Kh0y4HRXbOLgcf4P41R9V0t10jUGMgwrR/q9cyAU2/35vVB29np8H/ik+lVrUu0l1c2N3b/AKKeNZSnt9+p27XDdKIRlaFtIpmrlH1BtxIOxOnljn8qintwsKSQyxMjD7qvlh7+KJu4++mZ3XdkAZBx0FWHsxJDHZvb3MpjUktGzn7vpnxruaXbMabeiilx4SL86xc4Azk+leoTWUl5B3VprJjz/Vo25D7x4fClD9kbmXd3l1Hv8AyY3fHFNK+iKfkpLklvZxjHjU8mnzLEJJWiiVkDp3pK7xnHs8c9DmjL6zjsJzb3itFKo6N4jzB8R60PtsVyVYc9ccVWDJZb4rm3hOCtkPQJ3h+QAH40xs+0ZtWU2saq/g8dtGmPiQx+VV7ciBdoxzRsJBPsqM+f8av415KyHlzM15owvXlg+0Pcd2YCmdqYzuPIHXHhVTnIW6bvGXJOSdgAqxRRs6KpGeeB1pdqGnb2Lg9fEGp+sR0yCIwEDNxGB5FV+lMLWCzlRiZ4iRjoF+lJTZlCV6eB5rqMG3U7mwDt5pNaGmehN2W09oWMDlTjgnaf3UPddnrS3sbidZSzRgbcqmB0znij7S8HdAZySo+NBa1OZbCW3iwC+M5wa48pWaJGRaTZG3ldWJkFrG6gbPvHdnw6cCurLStxG9xt642J/wDWl1gRDcMuGGLdI+WyCATTRbgqPECm5PodGX9rqFlDO+nQ200JhPfmeJCVGR93GOarMEWqzSkW0QLdcbFHp5+tXO2u4jaT99IF4P3jxjFL7W6tWkkEUqZ6ce+qUrW0Sm1pFVmsNUkuJA8OZRGGYAL93Jx4+dB6hp1ykwS8VkcLnAA6fOrHe3Qt52aIGNGQx5BznJ8ajW9tproS3siNuP65xx0A/CrTXpD+3sEstN1fuYTbxAo4OzIXp86MfTtfIw0aj4L9afQXtuqwKsqAIDtHQj4VI+owMADIAcetQ3voMpeylS2uoCd4pOJADkbR0xk+NGDS9bUZCAjH9lfrTu5urNVkkDjcVPJBPhXTavAUTMhxgeFDfpBchE9hrij2kHwRfrQE+maj3T78hT1wF+tXH9JxN0Y/KksmqwC2uCQ+Bj55pxf8Bt+yuSaLcL7R3Af8tABHVSAZCBzxt9KsDazb5OY3/CoX1m3b/soPqSPpW6T9Gba9iyysrm7icwIrBiM7gufzqwaVqXcQi3u5ZvZGCTJjB/zYaljaqCoWKBR4Y3fwqa1MSQbScFuTVqF9kuQz1mDRdVIZG1SNUGQqmKdc+Y53fhVauNF0sMVW7dTngSxBGouWCM8pgHzFRO9ygws7Mo4w/tD8aeDRNoKttAsZU3FZBhtoHet4fGrVo/ZPSXO8xSZXpmZ/rWVlYybKZebKK00aJvsltgleTvz4+uaTazrTPviS2iQefU1lZUeCYdlGvIIbx5DNGeMj2WIzxQD6XYlS3dPxnrKx/fWVlbRNjP0Xa7lAEw3Ntz9ok+tbGkWZk2bZvP8Ap3+tarKqkBzFpdoZmUCYBVz/AE785+NSnSrQShMTYP8AxEnlnzrKyikBymmWzHBM/BHWd/HPrXa6VZ8kLMMc8TN9aysokkA10/SrJJo2EJ6E8yOf316F2blghjAW1TIAw2aysrCXZE3oI7SywzWb77cFmHJz8K8nkmcOwz0JFZWVHkrh6IppSYZP8p8a5MhZFPpmsrKrwa+TtLh9p91KHnZbWY45Zgv51lZTiTIDY5Ga0DWVldJzk9vgtgjOfOi844ArKyrQmRlmB61yJmLBSAa3WUyT/9k=" alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
