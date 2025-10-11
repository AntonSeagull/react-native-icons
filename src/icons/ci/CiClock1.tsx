

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiClock1 = (props: IconProps) => {

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
          <Path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z" />
          <Path d="M11.5,6a.5.5,0,0,1,1,0v4.8c1.13-1.13,2.26-2.27,3.39-3.4a.5.5,0,0,1,.71.71l-4.26,4.25a.463.463,0,0,1-.58.07c-.01-.02-.02-.02-.03-.02a.425.425,0,0,1-.22-.33Z" />
        </G>
      </Svg>
    );
  }

