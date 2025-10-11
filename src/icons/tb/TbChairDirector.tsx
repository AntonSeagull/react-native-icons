

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChairDirector = (props: IconProps) => {

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
          <Path d="M6 21l12 -9" />
          <Path d="M6 12l12 9" />
          <Path d="M5 12h14" />
          <Path d="M6 3v9" />
          <Path d="M18 3v9" />
          <Path d="M6 8h12" />
          <Path d="M6 5h12" />
        </G>
      </Svg>
    );
  }

