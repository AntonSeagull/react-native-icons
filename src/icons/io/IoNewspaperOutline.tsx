

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoNewspaperOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Line  x1="240" y1="128" x2="304" y2="128" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="240" y1="192" x2="304" y2="192" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="112" y1="256" x2="304" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="112" y1="320" x2="304" y2="320" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="112" y1="384" x2="304" y2="384" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M368,415.86V72a24.07,24.07,0,0,0-24-24H72A24.07,24.07,0,0,0,48,72V424a40.12,40.12,0,0,0,40,40H416" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M416,464h0a48,48,0,0,1-48-48V128h72a24,24,0,0,1,24,24V416A48,48,0,0,1,416,464Z" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M176,208H112a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v64A16,16,0,0,1,176,208Z" />
        </G>
      </Svg>
    );
  }

