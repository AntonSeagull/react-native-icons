

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHeading = (props: IconProps) => {

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
          <Path d="M7 12h10" />
          <Path d="M7 5v14" />
          <Path d="M17 5v14" />
          <Path d="M15 19h4" />
          <Path d="M15 5h4" />
          <Path d="M5 19h4" />
          <Path d="M5 5h4" />
        </G>
      </Svg>
    );
  }

