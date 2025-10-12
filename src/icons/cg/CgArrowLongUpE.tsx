

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowLongUpE = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12.0321 1.01318L16.2425 5.28781L14.8177 6.69131L13.014 4.86019L12.9436 16.9774L14.9425 16.9869L14.914 22.9868L8.91412 22.9583L8.9426 16.9584L10.9436 16.9679L11.0142 4.82318L9.16107 6.64852L7.75757 5.22367L12.0321 1.01318ZM10.9236 20.9678L12.9236 20.9773L12.9331 18.9773L10.9331 18.9678L10.9236 20.9678Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

