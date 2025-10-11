

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiMobile = (props: IconProps) => {

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
          <Path  d="M12.5 0h-8c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h8c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM4.5 1h8c0.276 0 0.5 0.224 0.5 0.5v1.5h-9v-1.5c0-0.276 0.224-0.5 0.5-0.5zM13 4v8h-9v-8h9zM12.5 16h-8c-0.276 0-0.5-0.224-0.5-0.5v-2.5h9v2.5c0 0.276-0.224 0.5-0.5 0.5zM9 14.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5z" />
        </G>
      </Svg>
    );
  }

