

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcCloth = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#FF5722" d="M6,10v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V10c0-2.2-1.8-4-4-4H10C7.8,6,6,7.8,6,10z" />
          <Path  d="M6.1,39c0.2,0.8,0.6,1.5,1.2,2h33.2c0.6-0.5,1-1.2,1.2-2H6.1z" />
          <Path  d="M6.1,9h35.7c-0.2-0.8-0.6-1.5-1.2-2H7.4C6.8,7.5,6.3,8.2,6.1,9z" />
          <Path  d="M39,6.1V7h1.6C40.2,6.6,39.6,6.3,39,6.1z" />
          <Path  d="M40.6,41H39v0.9C39.6,41.7,40.2,41.4,40.6,41z" />
          <Path  d="M9,41H7.4c0.5,0.4,1,0.7,1.6,0.9V41z" />
          <Path  d="M7.4,7H9V6.1C8.4,6.3,7.8,6.6,7.4,7z" />
        </G>
      </Svg>
    );
  }

