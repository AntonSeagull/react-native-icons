

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMegaphoneOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="160" x2="256" y2="288" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="112" y1="160" x2="112" y2="288" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M407.94,52.22S321.3,160,240,160H80a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16H240c81.3,0,167.94,108.23,167.94,108.23,6.06,8,24.06,2.52,24.06-9.83V62C432,49.69,415,43.18,407.94,52.22Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M64,256s-16-6-16-32,16-32,16-32" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M448,246s16-4.33,16-22-16-22-16-22" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M144,288V456a8,8,0,0,0,8,8h53a16,16,0,0,0,15.29-20.73C211.91,416.39,192,386.08,192,336h16a16,16,0,0,0,16-16V304a16,16,0,0,0-16-16H192" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

