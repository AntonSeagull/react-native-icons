

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiGuatemala = (props: IconProps) => {

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
          <Path  d="M190.8 25.24l175.1 1.08-.1 215.08 27.3-.9 78 19.9-97.3 76.3-20.5 68.7-84.7 81.4c-106.1-3.9-179.25-36.3-227.72-90l31.21-136.1 44.61-40.2 117.8-2.1c-.5-50.9-50.7-91.8-109.5-130.92l47 3.81z" />
        </G>
      </Svg>
    );
  }

