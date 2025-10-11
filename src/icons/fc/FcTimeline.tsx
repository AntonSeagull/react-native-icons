

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcTimeline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M42,29H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7c0.4-0.4,0.9-0.6,1.4-0.6H42 c0.6,0,1,0.4,1,1v8C43,28.6,42.6,29,42,29z" fill="#3F51B5" />
          <Path d="M34,43H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7c0.4-0.4,0.9-0.6,1.4-0.6H34 c0.6,0,1,0.4,1,1v8C35,42.6,34.6,43,34,43z" fill="#448AFF" />
          <Path d="M35,15H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7C19.8,5.2,20.3,5,20.8,5H35 c0.6,0,1,0.4,1,1v8C36,14.6,35.6,15,35,15z" fill="#00BCD4" />
        </G>
      </Svg>
    );
  }

