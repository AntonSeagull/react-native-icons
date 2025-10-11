

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiBag = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M13 4v-2.394c0-0.885-0.737-1.606-1.643-1.606h-5.699c-0.905 0-1.642 0.721-1.642 1.606v2.394h-3.016v13h15v-13h-3zM5.016 1.606c0-0.334 0.288-0.606 0.642-0.606h5.699c0.355 0 0.643 0.272 0.643 0.606v2.394h-6.984v-2.394zM15 16h-13v-8h13v8zM15 7h-13v-2h2.016v0.643h1v-0.643h6.984v0.643h1v-0.643h2v2z" />
        </G>
      </Svg>
    );
  }

