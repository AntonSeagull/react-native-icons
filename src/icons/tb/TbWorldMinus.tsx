

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldMinus = (props: IconProps) => {

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
          <Path d="M20.483 15.006a9 9 0 1 0 -7.958 5.978" />
          <Path d="M3.6 9h16.8" />
          <Path d="M3.6 15h16.8" />
          <Path d="M11.5 3a17 17 0 0 0 0 18" />
          <Path d="M12.5 3a16.94 16.94 0 0 1 2.307 12" />
          <Path d="M16 19h6" />
        </G>
      </Svg>
    );
  }

