

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcCollaboration = (props: IconProps) => {

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
          <Path  fill="#1565C0" d="M25,22h13l6,6V11c0-2.2-1.8-4-4-4H25c-2.2,0-4,1.8-4,4v7C21,20.2,22.8,22,25,22z" />
          <Path  fill="#2196F3" d="M23,19H10l-6,6V8c0-2.2,1.8-4,4-4h15c2.2,0,4,1.8,4,4v7C27,17.2,25.2,19,23,19z" />
          <Path  d="M20,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z" />
          <Path  d="M44,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z" />
        </G>
      </Svg>
    );
  }

