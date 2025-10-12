

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SlControlPlay = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 512, 512)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M144.624 65.392l735.744 446.592-736.736 446.624zm0-64a63.765 63.765 0 0 0-31.088 8.063c-20.32 11.28-32.912 32.705-32.912 55.937l-.992 893.216a63.958 63.958 0 0 0 32.912 55.936 63.937 63.937 0 0 0 31.088 8.065c11.712 0 23.472-3.216 33.775-9.664l736.72-446.624a63.94 63.94 0 0 0 30.257-54.336c0-22.112-11.44-42.672-30.257-54.352L178.4 11.025a64.084 64.084 0 0 0-33.775-9.632z" />
        </G>
      </Svg>
    );
  }

