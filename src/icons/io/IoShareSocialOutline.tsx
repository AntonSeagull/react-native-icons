

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoShareSocialOutline = (props: IconProps) => {

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
          <Line  x1="169.83" y1="279.53" x2="342.17" y2="376.47" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="342.17" y1="135.53" x2="169.83" y2="232.47" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

