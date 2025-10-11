

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoWineOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="272" x2="256" y2="432" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="352" y1="432" x2="160" y2="432" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="112" y1="160" x2="400" y2="160" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M398.57,80H113.43V96S87.51,272,256,272,398.57,96,398.57,96Z" fill="none" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

