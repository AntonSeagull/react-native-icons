

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLivePhotoOff = (props: IconProps) => {

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
          <Path d="M11.296 11.29a1 1 0 1 0 1.414 1.415" />
          <Path d="M8.473 8.456a5 5 0 1 0 7.076 7.066m1.365 -2.591a5 5 0 0 0 -5.807 -5.851" />
          <Path d="M15.9 20.11v.01" />
          <Path d="M19.04 17.61v.01" />
          <Path d="M20.77 14v.01" />
          <Path d="M20.77 10v.01" />
          <Path d="M19.04 6.39v.01" />
          <Path d="M15.9 3.89v.01" />
          <Path d="M12 3v.01" />
          <Path d="M8.1 3.89v.01" />
          <Path d="M4.96 6.39v.01" />
          <Path d="M3.23 10v.01" />
          <Path d="M3.23 14v.01" />
          <Path d="M4.96 17.61v.01" />
          <Path d="M8.1 20.11v.01" />
          <Path d="M12 21v.01" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

