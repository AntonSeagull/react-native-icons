

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandCodesandbox = (props: IconProps) => {

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
          <Path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" />
          <Path d="M12 12l4 -2.25l4 -2.25" />
          <Path d="M12 12l0 9" />
          <Path d="M12 12l-4 -2.25l-4 -2.25" />
          <Path d="M20 12l-4 2v4.75" />
          <Path d="M4 12l4 2l0 4.75" />
          <Path d="M8 5.25l4 2.25l4 -2.25" />
        </G>
      </Svg>
    );
  }

