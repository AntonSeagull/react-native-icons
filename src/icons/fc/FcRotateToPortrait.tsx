

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcRotateToPortrait = (props: IconProps) => {

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
          <Path  fill="#37474F" d="M41,38H7c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4v20C45,36.2,43.2,38,41,38z" />
          <Path  fill="#F3E5F5" d="M6,14v20c0,0.6,0.4,1,1,1h34c0.6,0,1-0.4,1-1V14c0-0.6-0.4-1-1-1H7C6.4,13,6,13.4,6,14z" />
          <Path  fill="#9C27B0" d="M24,21v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-2h-4v2c0,3.3,2.7,6,6,6s6-2.7,6-6v-6H24z" />
        </G>
      </Svg>
    );
  }

