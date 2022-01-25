import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export interface Location {
  latitude: number;
  longitude: number;
}

interface KakaoMapProps {
  location: Location | null;
  address?: string;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const MapWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;

  button {
    position: absolute;
    left: 50%;
    top: 20px;
    z-index: 1;
    transform: translate(-50%, 0);
    padding: 0.8rem 1.2rem;
    font-size: 0.8rem;
    border-radius: 20px;
    border: none;
    background-color: #3a2817;
    color: #fff000;
    cursor: pointer;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
  .content {
    width: 150px;
    text-align: center;
    padding: 6px 0;
  }
  div:nth-child(1) > div > div:nth-child(6) > div:nth-child(1) > img {
    -webkit-animation: blink 1.5s ease-in-out infinite alternate;
    -moz-animation: blink 1.5s ease-in-out infinite alternate;
    animation: blink 1.5s ease-in-out infinite alternate;
    @-webkit-keyframes blink {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
    @-moz-keyframes blink {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes blink {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const createMarker = (map: any, center: any, address: string) => {
  console.log(center);
  let imageMaker = new window.kakao.maps.MarkerImage(
    '/map/location2.png',
    new window.kakao.maps.Size(24, 24),
  );

  let marker = new window.kakao.maps.Marker({
    map: map,
    position: center,
    image: imageMaker,
    clickable: true,
  });

  let infowindow = new window.kakao.maps.InfoWindow({
    content: `<div class="content">${address}</div>`,
  });
  infowindow.open(map, marker);
  // map.setCenter(coords);
};

const KakaoMap: React.FC<KakaoMapProps> = ({ address, location }) => {
  const mapRef = useRef<any>();

  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');

        if (location) {
          let center = new window.kakao.maps.LatLng(
            location.latitude,
            location.longitude,
          );

          const map = new window.kakao.maps.Map(container, { center });
          mapRef.current = map;
          const appkey = 'c42a28467e0a3fd69bd60a554f14c41e';
          const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${location.latitude}&y=${location.longitude}&input_coord=WGS84`;
          const headers = new Headers();
          headers.append('Authorization', `KakaoAK ${appkey}`);
          const mode = 'cors';

          (async () => {
            const response = await fetch(url, { headers, mode });
            const result = await response.json();
            createMarker(
              map,
              center,
              result.documents[0]
                ? result.documents[0].road_address.address_name
                : '현재 위치',
            );
          })();
          // geocoder.coord2RegionCode(
          //   location.latitude,
          //   location.longitude,
          //   function (result: any, status: any) {
          //     if (status === window.kakao.maps.services.Status.OK) {
          //       console.log('지역 명칭 : ' + result[0].address_name);
          //       console.log('행정구역 코드 : ' + result[0].code);
          //     }
          //   },
          // );
        }

        if (address) {
          let geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(address, function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              let center = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );
              const map = new window.kakao.maps.Map(container, { center });
              createMarker(map, center, address);
            }
          });
        }
      });
    };

    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [address, location]);

  const onSearchCurLoaction = () => {
    console.log(mapRef.current.getBounds().getSouthWest());
    console.log(mapRef.current.getBounds().getNorthEast());
  };

  return (
    <MapWrapper>
      <Map id="map" />
      <button onClick={onSearchCurLoaction}>현재 위치에서 검색</button>
    </MapWrapper>
  );
};

export default KakaoMap;
