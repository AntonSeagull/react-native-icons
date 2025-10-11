

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIcons = (props: IconProps) => {

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
          <Path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
          <Path d="M2.5 21h8l-4 -7z" />
          <Path d="M14 3l7 7" />
          <Path d="M14 10l7 -7" />
          <Path d="M14 14h7v7h-7z" />
        </G>
      </Svg>
    );
  }

