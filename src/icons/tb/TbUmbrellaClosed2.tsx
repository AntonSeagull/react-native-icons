

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUmbrellaClosed2 = (props: IconProps) => {

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
          <Path d="M6.697 12.071l11.313 -7.071l-7.07 11.314z" />
          <Path d="M8.743 14.475l-2.121 2.121c-1.886 1.886 .943 4.715 2.828 2.829" />
        </G>
      </Svg>
    );
  }

