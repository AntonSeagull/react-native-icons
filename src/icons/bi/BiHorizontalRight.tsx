

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiHorizontalRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13 11H5v2h8v3l4-4-4-4v3zM19 3h2v3h-2zM19 8h2v3h-2zM19 13h2v3h-2zM19 18h2v3h-2z" />
        </G>
      </Svg>
    );
  }

